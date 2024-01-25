import React from 'react';
import { FaSquarePlus } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';
import '../../styles/Tasks.css';

const InProgressList = () => {
  const { tasks } = useSelector((store) => store.tasks);
  const inProgress = tasks.filter(((task) => task.status === inProgress));
  return (
    <div className="tasks-container">
      <div className="tasks-title-wrap">
        <span>To Do</span>
        <Link to="/add-task" className="tasks-title-icon-wrap">
          <FaSquarePlus />
          <span style={{ fontSize: '0.5rem' }}>Add new card</span>
        </Link>
      </div>
      <div className="tasks-list">
        {inProgress.map((task) => <TaskItem key={task.id} task={task} />)}
      </div>
    </div>
  );
};

export default InProgressList;
