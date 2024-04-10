import { zodResolver } from '@hookform/resolvers/zod';
import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { z } from 'zod';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';

const schema = z.object({
  name: z.string().min(2).max(50).nonempty(),
  email: z.string().email(),
  photo: z.string().url(),
  password: z
    .string()
    .min(6)
    .refine((value) => /^(?=.*[a-z])(?=.*[A-Z]).+$/.test(value), {
      message: 'Password must contain at least one uppercase letter and one lowercase letter',
    }),
});

const Register = () => {
  const authInfo = useContext(AuthContext);
  console.log(authInfo);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: {}, resolver: zodResolver(schema) });

  const [isPassVisible, setIsPassVisible] = useState(false);

  const submitHandler = (data) => {
    try {
      console.log('User data is valid:', data);
    } catch (e) {
      console.log(e);
    }
    // resetField('username');
    reset();
  };
  return (
    <div className="bg-gray-100 min-h-[calc(100vh-72px)] flex items-center justify-center font-kufam">
      <Helmet>
        <title>HomeLocus | Register</title>
      </Helmet>
      <div className="w-full max-w-md p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex justify-center items-center mx-auto">
          <h1 className="text-2xl sm:text-3xl text-transparent bg-gradient-to-br from-slate-950 via-slate-600 to-slate-950 bg-clip-text font-black font-kufam">REGISTER</h1>
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
              Sign Up
            </button>
          </div>
        </form>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

          <a href="#" className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">
            or sign up with Social Media
          </a>

          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
        </div>

        <div className="flex items-center mt-6 -mx-2">
          <button
            type="button"
            className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
            <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
              <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
            </svg>

            <span className="hidden mx-2 sm:inline">Sign up with Google</span>
          </button>

          <a href="#" className="p-2 mx-2 text-sm font-medium text-gray-900 transition-colors duration-300 transform bg-gray-300 rounded-lg hover:bg-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
              <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
            </svg>
          </a>
        </div>

        <p className="mt-8 text-sm font-light text-center text-gray-400">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-gray-700 dark:text-gray-200 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
