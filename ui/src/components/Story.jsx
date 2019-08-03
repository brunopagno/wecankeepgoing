import React from 'react';
import PropTypes from 'prop-types';

const Story = ({ text }) => (
  <div className="story">
    { text }
  </div>
);

Story.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Story;
