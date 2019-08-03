import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  constructor(props) {
    super(props);

    const { value } = this.props;
    this.state = {
      value,
    };

    this.onChangeValue = this.onChangeValue.bind(this);
    this.onSubmitValue = this.onSubmitValue.bind(this);
  }

  onChangeValue(ev) {
    this.setState({
      value: ev.target.value,
    });
  }

  onSubmitValue(ev) {
    ev.preventDefault();
    const { value } = this.state;
    const { onSubmit } = this.props;
    onSubmit(value);
    this.setState({
      value: '',
    });
  }

  render() {
    const { value } = this.state;
    const { buttonText } = this.props;

    return (
      <form onSubmit={this.onSubmitValue}>
        <input type="text" onChange={this.onChangeValue} value={value} />
        <button type="submit">{ buttonText }</button>
      </form>
    );
  }
}

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
