/* eslint jsx-a11y/control-has-associated-label: 0 */

import React from 'react';
import { CiSearch } from 'react-icons/ci';

const TopBar = () => (
  <header id="header">
    <div className="topbar-text">
      <strong>Your task</strong>
      <span style={{ fontSize: '0.5rem', color: 'var(--softGrey)' }}>Keep your task manageable</span>
    </div>

    {/* Search form */}
    <div className="mid-nav">
      <form className="search-wrapper">
        <input
          type="search"
          name="search"
          id="search"
          className="search-input"
          placeholder="Search anything"
        />
        <button type="submit" id="search-button">
          <CiSearch />
        </button>
      </form>
    </div>
  </header>
);

export default TopBar;
