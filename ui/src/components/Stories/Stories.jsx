import React, { Fragment } from 'react';
import StoriesService from '../../services/StoriesService/StoriesService';
import Story from '../Story';

class Stories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stories: [],
    };
  }

  async componentDidMount() {
    const stories = await StoriesService.getStories();
    this.setState({
      stories,
    });
  }

  render() {
    const { stories } = this.state;
    return (
      <Fragment>
        { stories.map(story => <Story key={story.id} {...story} />) }
      </Fragment>
    );
  }
}

export default Stories;
