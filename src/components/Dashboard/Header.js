import React from 'react';
import '../../styles/Dashboard.css';
import TopBar from './TopBar';
import LeftSideBar from './LeftSideBar';
import RightSideBar from './RightSideBar';

const Header = () => (
  <>
    <TopBar />
    <LeftSideBar />
    <RightSideBar />
  </>
);

export default Header;
