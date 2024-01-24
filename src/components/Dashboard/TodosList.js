import React from 'react';
import { FaSquarePlus } from 'react-icons/fa6';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import '../../styles/Tasks.css';

const todosData = [
  {
    id: uuidv4(),
    title: 'Do my work',
    description: 'some description',
    assignee: 'Musong',
    color: 'red',
    image: 'https://tse1.mm.bing.net/th?id=OIP.VAuEzdfI8cRI28R8U0s2zwHaFj&pid=Api&P=0&h=220',
    status: 'todo',
  },
  {
    id: uuidv4(),
    title: 'Do my work',
    description: 'some description',
    assignee: 'Musong',
    color: 'red',
    image: 'https://tse1.mm.bing.net/th?id=OIP.VAuEzdfI8cRI28R8U0s2zwHaFj&pid=Api&P=0&h=220',
    status: 'todo',
  },
  {
    id: uuidv4(),
    title: 'Do my work',
    description: 'some description',
    assignee: 'Musong',
    color: 'red',
    image: 'https://tse1.mm.bing.net/th?id=OIP.VAuEzdfI8cRI28R8U0s2zwHaFj&pid=Api&P=0&h=220',
    status: 'todo',
  },

];
console.log(todosData);
const TodosList = () => (
  <div className="tasks-container">
    <div className="tasks-title-wrap">
      <h6>To do</h6>
      <Link to="/" className="tasks-title-icon-wrap">
        <FaSquarePlus />
        <span style={{ fontSize: '0.5rem' }}>Add new card</span>
      </Link>
    </div>
  </div>
);

export default TodosList;
