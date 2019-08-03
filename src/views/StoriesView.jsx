import React, { Fragment } from 'react';
import StoriesService from '../services/StoriesService';
import Stories from '../components/Stories';
import Input from '../components/Input';

class StoriesView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stories: [],
    };

    this.addStory = this.addStory.bind(this);
  }

  async componentDidMount() {
    const stories = await StoriesService.getStories();
    this.setState({
      stories,
    });
  }

  async addStory(text) {
    const { stories } = this.state;
    const response = await StoriesService.addStory(text);
    this.setState({
      stories: [...stories, { id: response.id, text: response.text }],
    });
  }

  render() {
    const { stories } = this.state;

    return (
      <Fragment>
        <Input onSubmit={this.addStory} />
        <Stories stories={stories} />
      </Fragment>
    );
  }
}

export default StoriesView;
