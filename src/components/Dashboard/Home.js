import React from 'react';
import '../../styles/Dashboard.css';
import TodosList from './TodosList';
import FilterForm from './FilterForm';
import InProgressList from './InProgressList';
import CompletedList from './CompletedList';

const Home = () => (
  <main className="main">
    <FilterForm />
    <div className="all-tasks">
      <TodosList />
      <InProgressList />
      <CompletedList />
    </div>
  </main>
);

export default Home;
