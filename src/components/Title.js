import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title }) => (
  <div className="title4" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
    <h1 className="text2">{title}</h1>
    <h6 style={{ color: 'red' }}>
      Press and hold
      {' '}
      <strong style={{ color: 'var(--clr-black)' }}>Ctrl</strong>
      {' '}
      on windows to select multiple assignees.
    </h6>
  </div>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
