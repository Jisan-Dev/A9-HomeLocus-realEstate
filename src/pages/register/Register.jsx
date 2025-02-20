import { zodResolver } from '@hookform/resolvers/zod';
import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';
import SocialLogin from '../../components/SocialLogin';
import { toast } from 'react-toastify';
import signup from '../../assets/signup.png';

const schema = z.object({
  name: z.string().min(2).max(50).nonempty(),
  email: z.string().email(),
  photo: z.string().optional(),
  password: z
    .string()
    .min(6)
    .refine((value) => /^(?=.*[a-z])(?=.*[A-Z]).+$/.test(value), {
      message: 'Password must contain at least one uppercase letter and one lowercase letter',
    }),
});

const Register = () => {
  const { createUser, handleUpdateProfile, setIsUserUpdated, isUserUpdated, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const [isPassVisible, setIsPassVisible] = useState(false);

  const submitHandler = (data) => {
    console.log('User data is valid:', data);
    createUser(data.email, data.password)
      .then((result) => {
        if (result.user) {
          handleUpdateProfile(data.name, data.photo).then(() => {
            setIsUserUpdated(!isUserUpdated);
            reset();
            toast.success('Successfully registered', {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'dark',
            });

            navigate('/');
          });
        }
      })
      .catch((error) => {
        toast.error(error.code, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
        setIsUserUpdated(!isUserUpdated);
        console.log(error);
      });
  };
  return (
    <div className="container mx-auto flex items-center justify-center font-kufam max-sm:px-3 pb-14 max-sm:py-5 max-sm:flex-col overflow-x-hidden">
      <Helmet>
        <title>HomeLocus | Register</title>
      </Helmet>
      <div data-aos="fade-right" data-aos-duration="1000" className="w-1/2 pt-5 max-sm:w-full">
        <div className="w-full max-w-md p-6 m-auto mx-auto bg-white rounded-xl shadow-md">
          <div className="flex justify-center items-center mx-auto">
            <h1 className="text-2xl sm:text-3xl text-transparent bg-gradient-to-br from-slate-950 via-slate-600 to-slate-950 bg-clip-text font-black font-kufam tracking-wider">
              REGISTER
            </h1>
          </div>

          <form className="mt-6" onSubmit={handleSubmit(submitHandler)}>
            <div>
              <label htmlFor="username" className="block text-sm text-gray-800 dark:text-gray-200">
                Username
              </label>
              <input
                type="text"
                id="username"
                {...register('name')}
                className="block w-full px-4 py-2 mt-2 text-slate-700 bg-white border rounded-lg focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              {errors.name && <div className="text-red-500 text-xs">{errors.name.message}</div>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-gray-800 dark:text-gray-200">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register('email')}
                className="block w-full px-4 py-2 mt-2 text-slate-700 bg-white border rounded-lg focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40"
                required
              />
              {errors.email && <div className="text-red-500 text-xs">{errors.email.message}</div>}
            </div>

            <div>
              <label htmlFor="photo" className="block text-sm text-gray-800 dark:text-gray-200">
                Photo URL
              </label>
              <input
                type="photo"
                id="photo"
                {...register('photo')}
                className="block w-full px-4 py-2 mt-2 text-slate-700 bg-white border rounded-lg focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm text-gray-800 dark:text-gray-200">
                  Password
                </label>
                <a href="#" className="text-xs text-gray-600 hover:underline">
                  Forget Password?
                </a>
              </div>

              <div className="relative">
                <input
                  type={isPassVisible ? 'text' : 'password'}
                  id="password"
                  {...register('password')}
                  className="block w-full px-4 py-2 mt-2 text-slate-700 bg-white border rounded-lg focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  required
                />
                {isPassVisible ? (
                  <FaEyeSlash onClick={() => setIsPassVisible(!isPassVisible)} className="absolute top-3 right-3 text-xl cursor-pointer" />
                ) : (
                  <FaEye onClick={() => setIsPassVisible(!isPassVisible)} className="absolute top-3 right-3 text-xl cursor-pointer" />
                )}
              </div>
              {errors.password && <div className="text-red-500 text-xs">{errors.password.message}</div>}
            </div>

            <div className="mt-6">
              <button className="w-full px-6 py-2.5 text-base font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                {loading ? <span className="loading loading-infinity loading-sm p-0 h-4 -mb-1"></span> : 'Sign Up'}
              </button>
            </div>
          </form>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

            <a className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 cursor-default">or sign up with Social Media</a>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
          </div>

          <SocialLogin />

          <p className="mt-8 text-sm font-light text-center text-gray-400">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-gray-700 dark:text-gray-200 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>

      <div data-aos="fade-left" data-aos-duration="1000" className=" w-1/2 max-sm:w-full max-sm:mt-2">
        <img src={signup} className="w-full" />
      </div>
    </div>
  );
};

export default Register;
