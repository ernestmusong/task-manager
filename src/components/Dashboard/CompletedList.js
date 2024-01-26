import React from 'react';
import { FaSquarePlus } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';
import { handleCompletedDrop } from 'redux/tasks/tasksSlice';
import TaskItem from './TaskItem';
import '../../styles/Tasks.css';

const CompletedList = () => {
  const dispatch = useDispatch();
  const [{ isOver }, drop] = useDrop({
    accept: 'TASK',
    drop: (item) => {
      dispatch(handleCompletedDrop(item));
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

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
      <div ref={drop} className={`tasks-list ${isOver ? 'drop-active' : ''}`}>
        {CompletedTasks.map((task) => <TaskItem key={task.id} task={task} />)}
      </div>
    </div>
  );
};

export default CompletedList;
