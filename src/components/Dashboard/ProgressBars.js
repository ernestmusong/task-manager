import React from 'react';
import '../../styles/ProgressBars.css';

const ProgressBars = () => (
  <div className="progress-bars-wrap">
    <article className="progress-item first-article">
      <div className="progress-title member-column">
        <strong>Active member</strong>
      </div>
      <div className="progress-title progress-column">Progress bar</div>
      <div className="progress-title todo-column">To do</div>
      <div className="progress-title time-column">Time</div>
    </article>
    <article className="progress-item">
      <div className="progress-title member-column">
        <div className="member">
          <a className="profile-img-wrap" href="/profile" style={{ color: 'var(--softWhite)' }}>
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.VjjkjYZKFNuvP7sB3lySSQHaE8&pid=Api&P=0&h=220"
              alt="profile-img"
              className="profile-img"
            />
          </a>
          <div className="topbar-text">
            <strong>John Ryes</strong>
          </div>
        </div>
      </div>
      <div className="progress-title progress-column">
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: '75%', borderRadius: '4px' }} />
        </div>
      </div>
      <div className="progress-title todo-column">
        <strong>practice javascript</strong>
      </div>
      <div className="progress-title time-column" style={{ textTransform: 'lowercase' }}>
        <strong>2</strong>
        d
      </div>
    </article>
    <article className="progress-item">
      <div className="progress-title member-column">
        <div className="member">
          <a className="profile-img-wrap" href="/profile" style={{ color: 'var(--softWhite)' }}>
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.VjjkjYZKFNuvP7sB3lySSQHaE8&pid=Api&P=0&h=220"
              alt="profile-img"
              className="profile-img"
            />
          </a>
          <div className="topbar-text">
            <strong>John Ryes</strong>
          </div>
        </div>
      </div>
      <div className="progress-title progress-column">
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: '50%', borderRadius: '4px' }} />
        </div>
      </div>
      <div className="progress-title todo-column">
        <strong>practice javascript</strong>
      </div>
      <div className="progress-title time-column" style={{ textTransform: 'lowercase' }}>
        <strong>2</strong>
        d
      </div>
    </article>
  </div>
);

export default ProgressBars;
