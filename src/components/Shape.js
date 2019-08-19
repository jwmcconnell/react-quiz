import React from 'react';
import PropTypes from 'prop-types';

const Shape = ({ text, color }) => {
  return (
    <div style={{ width: '100px', height: '100px', color: color }}>
      <span>{text}</span>
    </div>
  );
};

Shape.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default Shape;
