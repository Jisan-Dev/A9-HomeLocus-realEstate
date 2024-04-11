import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { AuthContext } from '../../providers/AuthProvider';
import { zodResolver } from '@hookform/resolvers/zod';
import SocialLogin from '../../components/SocialLogin';

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const submitHandler = (data) => {
    console.log('User input data', data);
    loginUser(data.email, data.password)
      .then((result) => {
        console.log('logged in ', result.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="bg-slate-100 min-h-[calc(100vh-72px)] flex items-center justify-center font-kufam">
      <Helmet>
        <title>HomeLocus | Login</title>
      </Helmet>
      <div className="w-full max-w-md p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex justify-center items-center mx-auto">
          <h1 className="text-2xl sm:text-3xl text-transparent bg-gradient-to-br from-slate-950 via-slate-600 to-slate-950 bg-clip-text font-black font-kufam">LOGIN</h1>
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

        <SocialLogin />

        <p className="mt-8 text-sm font-light text-center text-gray-400">
          Don&apos;t have an account?{' '}
          <Link to="/register" className="font-medium text-gray-700 dark:text-gray-200 hover:underline">
            Create One
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
