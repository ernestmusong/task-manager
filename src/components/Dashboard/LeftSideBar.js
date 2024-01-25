import React from 'react';
import { FaBookOpen, FaGear } from 'react-icons/fa6';
import { FaUser } from 'react-icons/fa';
import { RxDashboard } from 'react-icons/rx';
import logo from 'becuda-logo.png';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const LeftSideBar = () => {
  const { tasks } = useSelector((store) => store.tasks);
  const toDoTasks = tasks.filter(((task) => task.status === 'todo')) || [];
  return (
    <aside className="show-sidebar" id="left-sidebar">
      <div className="logo-wrapper">
        <NavLink to="/">
          <div style={{ width: '90px', height: '90px' }}>
            <img src={logo} alt="logo" className="logo" style={{ maxWidth: '100%' }} />
          </div>
        </NavLink>
      </div>
      <div className="d-navbar">
        <ul className="list">
          <li className="list-item" style={{ fontSize: '0.5rem', paddingLeft: '0' }}>overview</li>
          <li className="list-item dashboard-button">
            <div className="list-item-icon-wrap">
              <RxDashboard />
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active' : 'normal')}
              >
                dashboard
              </NavLink>
            </div>
          </li>
          <li className="list-item">
            <div className="list-item-icon-wrap">
              <FaBookOpen />
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active' : 'normal')}
              >
                Home
              </NavLink>
            </div>
          </li>
          <li className="list-item">
            <div className="list-item-icon-wrap">
              <FaBookOpen />
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active' : 'normal')}
              >
                project
              </NavLink>
            </div>
          </li>
          <li className="list-item">
            <div className="list-item-icon-wrap">
              <FaBookOpen />
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active' : 'normal')}
              >
                my tasks
              </NavLink>
            </div>
            <div className="list-item-value">
              {toDoTasks.length}
            </div>
          </li>
          <li className="list-item">
            <div className="list-item-icon-wrap">
              <FaBookOpen />
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active' : 'normal')}
              >
                calendar
              </NavLink>
            </div>
          </li>
          <li className="list-item">
            <div className="list-item-icon-wrap">
              <FaBookOpen />
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active' : 'normal')}
              >
                messages
              </NavLink>
            </div>
            <div className="list-item-value bg-danger">
              1
            </div>
          </li>
          <li className="list-item">
            <div className="list-item-icon-wrap">
              <FaUser />
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active' : 'normal')}
              >
                profile
              </NavLink>
            </div>
          </li>
          <li className="list-item mt-2" style={{ borderBottom: '1px solid var(--softGrey)' }} />
          <li className="list-item" style={{ fontSize: '0.5rem', paddingLeft: '0' }}>other</li>
          <li className="list-item">
            <div className="list-item-icon-wrap">
              <FaUser />
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active' : 'normal')}
              >
                help support
              </NavLink>
            </div>
          </li>
          <li className="list-item">
            <div className="list-item-icon-wrap">
              <FaGear />
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active' : 'normal')}
              >
                settings
              </NavLink>
            </div>
          </li>
        </ul>
        <div className="list-item">
          <div className="list-item-icon-wrap">
            <FaUser />
            <button type="button" className="logout-btn">Logout</button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default LeftSideBar;
