import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from 'components/Dashboard/Home';
import AddTaskForm from 'components/AddTaskForm';
import EditTaskForm from 'components/Dashboard/EditTaskForm';
import './App.css';
import Layout from './components/Layout';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/add-task" element={<AddTaskForm />} />
        <Route path="/edit-task" element={<EditTaskForm />} />
      </Route>
    </Routes>
  </>
);

export default App;
