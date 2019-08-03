import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Story from './Story';

const Stories = ({ stories }) => (
  <Fragment>
    { stories.map(story => <Story key={story.id} {...story} />) }
  </Fragment>
);

Stories.propTypes = {
  stories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.id,
    text: PropTypes.string,
  })).isRequired,
};

export default Stories;
