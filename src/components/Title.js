import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title }) => (
  <div className="title4">
    <h1 className="text2">{title}</h1>
  </div>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
