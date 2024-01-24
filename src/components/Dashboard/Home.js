import React from 'react';
import '../../styles/Dashboard.css';
import TodosList from './TodosList';
import FilterForm from './FilterForm';

const Home = () => (
  <main className="main">
    <FilterForm />
    <TodosList />
  </main>
);

export default Home;
