import React from 'react';
import { Tooltip } from 'react-tooltip';
import { Link } from 'react-router-dom';
import { FaEllipsisH } from 'react-icons/fa';
import '../../styles/RightSideBar.css';

const RightCalendar = () => (
  <>
    <div className="Calendar-upcomming">
      <div className="calendar-text">
        <strong>Calendar Upcomming</strong>
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
      <Tooltip anchorSelect=".my-anchor-element" place="bottom">Edit Calendar</Tooltip>
    </div>
    <div className="dates">
      <strong className="dates-title">Wednesday, 25 Jan 2024</strong>
      <div className="buttons-wrap">
        <button type="button" className="blue">7:00 - 12:00</button>
        <button type="button" className="grey">Presentation Design</button>
      </div>
      <div className="buttons-wrap">
        <button type="button" className="purple">7:00 - 12:00</button>
        <button type="button" className="grey">Presentation Design</button>
      </div>
    </div>
    <div className="dates">
      <strong className="dates-title">Wednesday, 25 Jan 2024</strong>
      <div className="buttons-wrap">
        <button type="button" className="blue">7:00 - 12:00</button>
        <button type="button" className="grey">Presentation Design</button>
      </div>
      <div className="buttons-wrap">
        <button type="button" className="purple">7:00 - 12:00</button>
        <button type="button" className="grey">Presentation Design</button>
      </div>
    </div>
  </>
);

export default RightCalendar;
