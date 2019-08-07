import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Input = ({ value, buttonText, onSubmit }) => {
  const [currentValue, setValue] = useState(value);

  const onChangeValue = (ev) => {
    setValue(ev.target.value);
  };

  const onSubmitValue = (ev) => {
    ev.preventDefault();
    onSubmit(currentValue);
    setValue('');
  };

  return (
    <form onSubmit={onSubmitValue}>
      <input type="text" onChange={onChangeValue} value={currentValue} />
      <button type="submit">{ buttonText }</button>
    </form>
  );
};

Input.propTypes = {
  value: PropTypes.string,
  buttonText: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

Input.defaultProps = {
  value: '',
  buttonText: 'Send',
};

export default Input;
