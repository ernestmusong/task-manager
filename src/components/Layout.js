import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Dashboard/Header';

const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default Layout;
