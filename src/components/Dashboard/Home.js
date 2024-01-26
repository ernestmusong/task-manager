import React from 'react';
import '../../styles/Dashboard.css';
import TodosList from './TodosList';
import FilterForm from './FilterForm';
import InProgressList from './InProgressList';
import CompletedList from './CompletedList';
import ProgressBars from './ProgressBars';

const Home = () => (
  <main className="main">
    <FilterForm />
    <div className="all-tasks">
      <TodosList />
      <InProgressList />
      <CompletedList />
    </div>
    <ProgressBars />
  </main>
);

export default Home;
