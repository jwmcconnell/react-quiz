import React from 'react';
import PropTypes from 'prop-types';

const ColorSelector = ({ color, backgroundColor, onChange }) => {
  return (
    <>
      <label>Text Color:
        <input type="color" name="color" onChange={onChange} value={color} />
      </label>
      <label>Background Color:
        <input type="color" name="backgroundColor" onChange={onChange} value={backgroundColor} />
      </label>
    </>
  );
};

ColorSelector.propTypes = {
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ColorSelector;
