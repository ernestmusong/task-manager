import React from 'react';

const FilterForm = () => (
  <div className="select-form-wrap">
    <form className="filter-form">
      <select
        name="search"
        id="search"
        className="select-input"
      >
        <option value="All">show: All tasks</option>
        <option value="To Do">To Do</option>
        <option value="In Progess">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
    </form>
  </div>
);

export default FilterForm;
