import React from 'react';
import PropTypes from 'prop-types';

const Shape = ({ text, color, backgroundColor }) => {
  return (
    <div style={{ width: '100px', height: '100px', color: color, backgroundColor: backgroundColor }}>
      <span>{text}</span>
    </div>
  );
};

Shape.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default Shape;
