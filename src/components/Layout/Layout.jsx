import Header from '../Header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const Layout = () => {
  return (
    <div>
      <Toaster />

      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
