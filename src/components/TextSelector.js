import React from 'react';
import PropTypes from 'prop-types';

const TextSelector = ({ text, onChange }) => {
  return (
    <label>Text:
      <input type="text" name="text" value={text} onChange={onChange} />
    </label>
  );
};

TextSelector.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextSelector;
