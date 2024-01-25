import React from 'react';
import { FaSquarePlus } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';
import '../../styles/Tasks.css';

const CompletedList = () => {
  const { tasks } = useSelector((store) => store.tasks);
  const CompletedTasks = tasks.filter(((task) => task.status === 'completed')) || [];
  return (
    <div className="tasks-container">
      <div className="tasks-title-wrap">
        <span>Completed</span>
        <Link to="/add-task" className="tasks-title-icon-wrap">
          <FaSquarePlus />
          <span style={{ fontSize: '0.5rem' }}>Add new card</span>
        </Link>
      </div>
      <div className="tasks-list">
        {CompletedTasks.map((task) => <TaskItem key={task.id} task={task} />)}
      </div>
    </div>
  );
};

export default CompletedList;
