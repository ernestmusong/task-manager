import React from 'react';
import { Link } from 'react-router-dom';
import { HiDotsVertical } from 'react-icons/hi';
import { FaEllipsisH } from 'react-icons/fa';
import '../../styles/RightSideBar.css';

const RightMembers = () => (
  <>
    <div className="Calendar-upcomming" style={{ paddingTop: '1.5rem' }}>
      <div className="calendar-text">
        <strong>Member in this task</strong>
        <span style={{ fontSize: '0.5rem', color: 'var(--softGrey)' }}>
          Your upcomming plan in this month
        </span>
      </div>
      <Link
        to="/"
        className="my-anchor-element"
        style={{ color: 'var(--softGrey)' }}
      >
        <FaEllipsisH />
      </Link>
    </div>
    <div className="members-list">
      <div className="member-wrap">
        <div className="member">
          <a className="profile-img-wrap" href="/profile" style={{ color: 'var(--softWhite)' }}>
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.VjjkjYZKFNuvP7sB3lySSQHaE8&pid=Api&P=0&h=220"
              alt="profile-img"
              className="profile-img"
            />
          </a>
          <div className="topbar-text">
            <strong style={{ fontSize: '0.75rem', fontWeight: 'bold' }}>John Ryes</strong>
            <span style={{ fontSize: '0.6rem', color: 'yellow' }}>example@gmail.com</span>
          </div>
        </div>
        <div className="edit-member-icon">
          <Link
            to="/"
            className="my-anchor-element"
            style={{ color: 'var(--softGrey)' }}
          >
            <HiDotsVertical />
          </Link>
        </div>
      </div>
      <div className="member-wrap">
        <div className="member">
          <a className="profile-img-wrap" href="/profile" style={{ color: 'var(--softWhite)' }}>
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.VjjkjYZKFNuvP7sB3lySSQHaE8&pid=Api&P=0&h=220"
              alt="profile-img"
              className="profile-img"
            />
          </a>
          <div className="topbar-text">
            <strong style={{ fontSize: '0.75rem', fontWeight: 'bold' }}>John Ryes</strong>
            <span style={{ fontSize: '0.6rem', color: 'yellow' }}>example@gmail.com</span>
          </div>
        </div>
        <div className="edit-member-icon">
          <Link
            to="/"
            className="my-anchor-element"
            style={{ color: 'var(--softGrey)' }}
          >
            <HiDotsVertical />
          </Link>
        </div>
      </div>
      <div className="member-wrap">
        <div className="member">
          <a className="profile-img-wrap" href="/profile" style={{ color: 'var(--softWhite)' }}>
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.VjjkjYZKFNuvP7sB3lySSQHaE8&pid=Api&P=0&h=220"
              alt="profile-img"
              className="profile-img"
            />
          </a>
          <div className="topbar-text">
            <strong style={{ fontSize: '0.75rem', fontWeight: 'bold' }}>John Ryes</strong>
            <span style={{ fontSize: '0.6rem', color: 'yellow' }}>example@gmail.com</span>
          </div>
        </div>
        <div className="edit-member-icon">
          <Link
            to="/"
            className="my-anchor"
            style={{ color: 'var(--softGrey)' }}
          >
            <HiDotsVertical />
          </Link>
        </div>
      </div>
    </div>
  </>
);

export default RightMembers;
