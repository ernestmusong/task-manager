import React from 'react';
import { FaRegBell, FaRss } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const RightSideBar = () => (
  <aside className="show-sidebar" id="right-sidebar">
    <div className="right-sidebar-top">
      <Link to="/" className="rightbar-top-icons">
        <FaRegBell />
      </Link>
      <Link to="/" className="rightbar-top-icons">
        <FaRss />
      </Link>
      <div className="profile-wrap">
        <div className="topbar-text">
          <strong>Username</strong>
          <span style={{ fontSize: '0.5rem', color: 'var(--softGrey)' }}>example@gmail.com</span>
        </div>
        <a className="profile-img-wrap" href="/profile" style={{ color: 'var(--softWhite)' }}>
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.IinrjlpXbDCJt28EGzYHfQHaHa&pid=Api&P=0&h=220"
            alt="profile-img"
            className="profile-img"
          />
        </a>
      </div>
    </div>
  </aside>
);

export default RightSideBar;
