import React from 'react';

const FilterForm = () => (
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
);

export default FilterForm;
