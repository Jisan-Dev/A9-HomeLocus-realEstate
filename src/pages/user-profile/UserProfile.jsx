import React, { useContext } from 'react';
import image from '../../assets/undraw_People_re_8spw.png';
import { AuthContext } from '../../providers/AuthProvider';
import defaultPlaceholder from '../../assets/Default_Placeholder.webp';
import { Helmet } from 'react-helmet-async';

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div data-aos="fade-zoom-in" data-aos-duration="700" className="flex flex-col lg:flex-row gap-6 container mx-auto min-h-[calc(100vh-172px)] items-center justify-center ">
      <Helmet>
        <title>Homelocus | User Profile</title>
      </Helmet>
      <div className="w-1/2 max-lg:w-full  px-6 sm:px-20 py-6 sm:pt-10">
        <div className="w-24 h-24 rounded-lg overflow-hidden">
          <img src={user.photoURL || defaultPlaceholder} referrerPolicy="no-referrer" />
        </div>
        <h1 className="font-kufam text-3xl font-bold mt-6">{user?.displayName}</h1>
        <p className="font-kufam text-xl font-semibold mt-3">
          <strong>Email: </strong>
          {user?.email ?? (
            <small>
              <i>Not found</i>
            </small>
          )}
        </p>
        <p className="font-kufam text-xl font-semibold mt-3">
          <strong>Phone Number:</strong>{' '}
          {user?.phoneNumber ?? (
            <small>
              <i>Not found</i>
            </small>
          )}
        </p>
        <a href={`mailto:${user?.email}`} className="btn btn-neutral lg:px-6 font-bold lg:text-lg mt-4" target="_blank">
          Reach Out
        </a>
      </div>
      <div className="w-1/2 max-sm:w-full">
        <img src={image} className="w-full object" />
      </div>
    </div>
  );
};

export default UserProfile;
