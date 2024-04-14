import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import { ScrollRestoration } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
const Root = () => {
  return (
    <>
      <ToastContainer />
      <ScrollRestoration />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
