import { zodResolver } from '@hookform/resolvers/zod';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { AuthContext } from '../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = z.object({
  name: z.string().min(2).max(50).nonempty(),
  photo: z.string().url(),
});

const Profile = () => {
  const { user, handleUpdateProfile, setIsUserUpdated, isUserUpdated } = useContext(AuthContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues: { name: user?.displayName, photo: user?.photoURL }, resolver: zodResolver(schema) });

  const submitHandler = (data) => {
    handleUpdateProfile(data.name, data.photo)
      .then(() => {
        setIsUserUpdated(!isUserUpdated);
        // window.location.reload(); //we could do this as well to immediately change the profile name and img on the navbar UI.

        toast.success('🦄 Profile Updated!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="bg-slate-100 min-h-[calc(100vh-72px)] flex items-center justify-center font-kufam">
      <div className="w-md p-6 bg-white">
        <div className="flex justify-center items-center mx-auto">
          <h1 className="text-2xl sm:text-3xl text-transparent bg-gradient-to-br from-slate-950 via-slate-600 to-slate-950 bg-clip-text font-black font-kufam mb-4">
            UPDATE PROFILE
          </h1>
        </div>
        <form onSubmit={handleSubmit(submitHandler)}>
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

          <div className="mt-4">
            <label htmlFor="photo" className="block text-sm text-gray-800 dark:text-gray-200">
              Photo URL
            </label>
            <input
              type="photo"
              id="photo"
              {...register('photo')}
              className="block w-full px-4 py-2 mt-2 text-slate-700 bg-white border rounded-lg focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.photo && <div className="text-red-500 text-xs">{errors.photo.message}</div>}
          </div>

          <div className="mt-6">
            <button className="w-full px-6 py-2.5 text-base font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
              Submit
            </button>
            <ToastContainer />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
