import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/Tasks.css';
import { Tooltip } from 'react-tooltip';
import { useDispatch } from 'react-redux';
import { FaEllipsisH } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { selectTask } from 'redux/tasks/tasksSlice';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
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
        <Link
          to="/edit-task"
          onClick={() => {
            dispatch(selectTask(task));
          }}
          className="my-anchor-element"
          style={{ color: 'var(--softGrey)' }}
        >
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
      <div className="assignees-row">
        {assignees.map((assignee) => {
          const id = assignees.indexOf(assignee);
          return (
            <div className="assignees-imgs-wrap" key={id}>
              <div className="assignee-img-wrap">
                <img src={assignee} className="assignee-img" alt="assignee" />
              </div>
            </div>
          );
        })}
        <div className="comments-wrap" />
      </div>
    </article>
  );
};

TaskItem.propTypes = {
  task: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default TaskItem;
