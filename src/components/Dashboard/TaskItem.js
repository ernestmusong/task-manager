import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/Tasks.css';
import { Tooltip } from 'react-tooltip';
import { useDispatch } from 'react-redux';
import { FaEllipsisH } from 'react-icons/fa';
import { FaCommentSms, FaEnvelopeCircleCheck } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { selectTask } from 'redux/tasks/tasksSlice';
import { useDrag } from 'react-dnd';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const {
    color,
    title,
    description,
    image,
    assignees,
  } = task;

  const [{ isDragging }, drag] = useDrag({
    type: 'TASK',
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  return (

    <article className="task-item" ref={drag} style={{ opacity: isDragging ? 0.5 : 1, cursor: 'move' }}>
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
        <strong style={{ fontSize: '0.6rem' }}>{description}</strong>
      </div>
      {image && (
      <div className="task-item-img-wrap">
        <img src={image} className="task-item-img" alt="Task" />
      </div>
      )}
      <div className="assignees-row">
        <div className="assignees-imgs-wrap">
          {assignees.map((assignee) => {
            const id = assignees.indexOf(assignee);
            return (
              <div className="assignee-img-wrap" key={id}>
                <img src={assignee} className="assignee-img" alt="assignee" />
              </div>
            );
          })}
        </div>
        <div className="comments-wrap">
          <span>
            <FaCommentSms />
          </span>
          <span className="comments-value">2</span>
          <span>
            <FaEnvelopeCircleCheck />
          </span>
          <span className="comments-value">10</span>
        </div>
      </div>
    </article>
  );
};

TaskItem.propTypes = {
  task: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default TaskItem;
