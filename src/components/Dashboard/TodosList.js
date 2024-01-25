import React, { useEffect } from 'react';
import { FaSquarePlus } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setTasks } from 'redux/tasks/tasksSlice';
import TaskItem from './TaskItem';
import '../../styles/Tasks.css';

const TodosList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTasks());
  }, [dispatch]);
  const { tasks } = useSelector((store) => store.tasks);
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
        {tasks.map((task) => <TaskItem key={task.id} task={task} />)}
      </div>
    </div>
  );
};

export default TodosList;
