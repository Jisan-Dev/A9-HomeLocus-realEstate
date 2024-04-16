import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { AuthContext } from '../../providers/AuthProvider';
import { zodResolver } from '@hookform/resolvers/zod';
import SocialLogin from '../../components/SocialLogin';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import login from '../../assets/login.png';

const schema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6)
    .refine((value) => /^(?=.*[a-z])(?=.*[A-Z]).+$/.test(value), {
      message: 'Password must contain at least one uppercase letter and one lowercase letter',
    }),
});

const Login = () => {
  const [isPassVisible, setIsPassVisible] = useState(false);
  const { loginUser } = useContext(AuthContext);
  const location = useLocation();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const submitHandler = (data) => {
    console.log('User input data', data);
    loginUser(data.email, data.password)
      .then((result) => {
        toast.success('successfully logged in', {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
        console.log('logged in ', result.user);
        navigate(location.state ?? '/');
      })
      .catch((error) => {
        toast.error(error.code, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
        console.error(error);
      });
  };

  return (
    <div
      data-aos="fade-zoom-in"
      data-aos-duration="700"
      className="sm:min-h-[calc(100vh-72px)] max-sm:px-3 max-sm:py-5 flex items-center justify-center max-sm:flex-col font-kufam">
      <Helmet>
        <title>HomeLocus | Login</title>
      </Helmet>
      <div className="w-1/2 pt-5 max-sm:w-full">
        <div className="w-full max-w-md p-6 m-auto mx-auto bg-white rounded-xl shadow-md">
          <div className="flex justify-center items-center mx-auto">
            <h1 className="text-2xl sm:text-3xl text-transparent bg-gradient-to-br from-slate-950 via-slate-600 to-slate-950 bg-clip-text font-black font-kufam tracking-wider">
              LOGIN
            </h1>
          </div>

          <form onSubmit={handleSubmit(submitHandler)} className="mt-6">
            <div>
              <label htmlFor="email" className="block text-sm text-gray-800 dark:text-gray-200">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register('email')}
                className="block w-full px-4 py-2 mt-2 text-slate-700 bg-white border rounded-lg focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              {errors.email && <div className="text-red-500 text-xs">{errors.email.message}</div>}
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
                Sign In
              </button>
            </div>
          </form>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

            <a className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 cursor-default">or login with Social Media</a>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
          </div>
          {/* <ToastContainer /> */}

          <SocialLogin />

          <p className="mt-8 text-sm font-light text-center text-gray-400">
            Don&apos;t have an account?{' '}
            <Link to="/register" className="font-medium text-gray-700 dark:text-gray-200 hover:underline">
              Create One
            </Link>
          </p>
        </div>
      </div>

      <div className="w-1/2 pt-5 max-sm:w-full">
        <img src={login} />
      </div>
    </div>
  );
};

export default Login;
