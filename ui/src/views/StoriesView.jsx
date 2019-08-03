import React, { Fragment } from 'react';
import StoriesService from '../services/StoriesService';
import Stories from '../components/Stories';
import Input from '../components/Input';

class StoriesView extends React.Component {
  static async addStory(text) {
    const response = await StoriesService.addStory(text);
    console.log({ response });
  }

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
        <Input onSubmit={StoriesView.addStory} />
        <Stories stories={stories} />
      </Fragment>
    );
  }
}

export default StoriesView;
