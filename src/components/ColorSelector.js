import React from 'react';
import PropTypes from 'prop-types';

const ColorSelector = ({ color, onChange }) => {
  return <input type="color" name="color" onChange={onChange} value={color} />;
};

ColorSelector.propTypes = {
  color: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ColorSelector;
