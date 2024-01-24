import React from 'react';
import { FaSquarePlus } from 'react-icons/fa6';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import TaskItem from './TaskItem';
import '../../styles/Tasks.css';

const tasks = [
  {
    id: uuidv4(),
    title: 'Do my work',
    description: 'some description',
    assignee: [
      {
        id: uuidv4(),
        name: 'Musong',
        img: 'https://tse1.mm.bing.net/th?id=OIP.VAuEzdfI8cRI28R8U0s2zwHaFj&pid=Api&P=0&h=220',
      },
    ],
    color: 'red',
    image: 'https://tse1.mm.bing.net/th?id=OIP.VAuEzdfI8cRI28R8U0s2zwHaFj&pid=Api&P=0&h=220',
    status: 'todo',
  },
  {
    id: uuidv4(),
    title: 'Do my work',
    description: 'some description',
    assignee: [
      {
        id: uuidv4(),
        name: 'Musong',
        img: 'https://tse1.mm.bing.net/th?id=OIP.VAuEzdfI8cRI28R8U0s2zwHaFj&pid=Api&P=0&h=220',
      },
    ],
    color: 'red',
    image: 'https://tse1.mm.bing.net/th?id=OIP.VAuEzdfI8cRI28R8U0s2zwHaFj&pid=Api&P=0&h=220',
    status: 'todo',
  },
  {
    id: uuidv4(),
    title: 'Do my work',
    description: 'some description',
    assignee: [
      {
        id: uuidv4(),
        name: 'Musong',
        img: 'https://tse1.mm.bing.net/th?id=OIP.VAuEzdfI8cRI28R8U0s2zwHaFj&pid=Api&P=0&h=220',
      },
    ],
    color: 'red',
    image: 'https://tse1.mm.bing.net/th?id=OIP.VAuEzdfI8cRI28R8U0s2zwHaFj&pid=Api&P=0&h=220',
    status: 'todo',
  },

];
const TodosList = () => (
  <div className="tasks-container">
    <div className="tasks-title-wrap">
      <span>To Do</span>
      <Link to="/" className="tasks-title-icon-wrap">
        <FaSquarePlus />
        <span style={{ fontSize: '0.5rem' }}>Add new card</span>
      </Link>
    </div>
    <div className="tasks-list">
      {tasks.map((task) => (<TaskItem key={task.id} task={task} />))}
    </div>
  </div>
);

export default TodosList;
