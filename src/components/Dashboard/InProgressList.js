import React from 'react';
import { FaSquarePlus } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';
import { handleIprogressDrop } from 'redux/tasks/tasksSlice';
import TaskItem from './TaskItem';
import '../../styles/Tasks.css';

const InProgressList = () => {
  const dispatch = useDispatch();

  const [{ isOver }, drop] = useDrop({
    accept: 'TASK',
    drop: (item) => {
      console.log(item);
      dispatch(handleIprogressDrop(item));
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const { tasks } = useSelector((store) => store.tasks);
  const inProgressTasks = tasks.filter(((task) => task.status === 'inProgress')) || [];
  const inProgressLength = inProgressTasks.length;
  return (
    <div className="tasks-container" style={{ height: inProgressLength === 0 ? 'calc(100vh - 319.9px)' : 'auto' }}>
      <div className="tasks-title-wrap">
        <span>In Progress</span>
        <Link to="/add-task" className="tasks-title-icon-wrap">
          <FaSquarePlus />
          <span style={{ fontSize: '0.5rem' }}>Add new card</span>
        </Link>
      </div>
      <div ref={drop} className={`tasks-list ${isOver ? 'drop-active' : ''}`}>
        {inProgressTasks.map((task) => <TaskItem key={task.id} task={task} />)}
      </div>
    </div>
  );
};

export default InProgressList;
