const Story = require('../models/story');

class StoryService {
  constructor() {
    this.stories = [
      new Story("I'm still doing my best :)"),
    ];
  }

  stories() {
    return this.stories;
  }

  story({ id }) {
    return this.stories.find(story => story.id.toString() === id);
  }

  addStory({ input: { text } }) {
    const story = new Story(text);
    this.stories.push(story);
    return story;
  }
}

module.exports = new StoryService();
