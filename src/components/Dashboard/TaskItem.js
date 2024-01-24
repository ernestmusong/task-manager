import React from 'react';
import PropTypes from 'prop-types';

const TaskItem = ({ task }) => (
  <article>actions</article>
);

TaskItem.propTypes = {
  task: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default TaskItem;
