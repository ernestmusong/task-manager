import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from 'components/Dashboard/Home';
import { setTasks } from './redux/tasks/tasksSlice';
import './App.css';
import Layout from './components/Layout';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTasks());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
