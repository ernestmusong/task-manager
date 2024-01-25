import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/Tasks.css';
import { Tooltip } from 'react-tooltip';
import { FaEllipsisH } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TaskItem = ({ task }) => {
  const {
    color,
    title,
    description,
    image,
    assignees,
  } = task;
  return (
    <article className="task-item">
      <div className="task-item-title-wrap">
        <span style={{ color }}>{title}</span>
        <Link to="/add-task" className="my-anchor-element" style={{ color: 'var(--softGrey)' }}>
          <FaEllipsisH />
        </Link>
        <Tooltip anchorSelect=".my-anchor-element" place="bottom">Edit this task</Tooltip>
      </div>
      <div className="task-item-desc-wrap">
        <strong>{description}</strong>
      </div>
      {image && (
      <div className="task-item-img-wrap">
        <img src={image} className="task-item-img" alt="Task" />
      </div>
      )}
      {assignees.map((assignee) => {
        const id = assignees.indexOf(assignee);
        return (
          <div className="assignee-img-wrap" key={id}>
            <img src={assignee} className="assignee-img" alt="assignee" />
          </div>
        );
      })}
    </article>
  );
};

TaskItem.propTypes = {
  task: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default TaskItem;
