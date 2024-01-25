import React from 'react';
import '../../styles/Dashboard.css';
import TodosList from './TodosList';
import FilterForm from './FilterForm';

const Home = () => (
  <main className="main">
    <FilterForm />
    <div className="all-tasks">
      <TodosList />
    </div>
  </main>
);

export default Home;
