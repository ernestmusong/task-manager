import React, { useEffect } from 'react';
import { FaSquarePlus } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';
import { setTasks, handleTodoDrop } from 'redux/tasks/tasksSlice';
import TaskItem from './TaskItem';
import '../../styles/Tasks.css';

const TodosList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTasks());
  }, [dispatch]);

  const [{ isOver }, drop] = useDrop({
    accept: 'TASK',
    drop: (item) => {
      console.log(item);
      dispatch(handleTodoDrop(item));
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });
  const { tasks } = useSelector((store) => store.tasks);
  const ToDoTasks = tasks.filter(((task) => task.status === 'todo')) || [];
  const todosLength = ToDoTasks.length;
  return (
    <div className="tasks-container" style={{ height: todosLength === 0 ? 'calc(100vh - 208.9px)' : 'auto' }}>
      <div className="tasks-title-wrap">
        <span>To Do</span>
        <Link to="/add-task" className="tasks-title-icon-wrap">
          <FaSquarePlus />
          <span style={{ fontSize: '0.5rem' }}>Add new card</span>
        </Link>
      </div>
      <div ref={drop} className={`tasks-list ${isOver ? 'drop-active' : ''}`}>
        {ToDoTasks.map((task) => <TaskItem key={task.id} task={task} />)}
      </div>
    </div>
  );
};

export default TodosList;
