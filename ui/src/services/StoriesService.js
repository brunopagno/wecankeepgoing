import ServerService from './ServerService';

class StoriesService {
  constructor() {
    this.FETCH_QUERY = `
      {
        stories { id, text }
      }
    `;

    this.ADD_QUERY = `
      mutation ADD_STORY($text: String!) {
        addStory(input: {
          text: $text
        }) { id, text }
      }
    `;
  }

  addQuery(text) {
    return this.ADD_QUERY.replace('<>', text);
  }

  async getStories() {
    const response = await fetch(ServerService.url(), {
      method: 'POST',
      body: JSON.stringify({
        query: this.FETCH_QUERY,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const queryResult = await response.json();

    return queryResult.data.stories;
  }

  async addStory(text) {
    if (text) {
      const response = await fetch(ServerService.url(), {
        method: 'POST',
        body: JSON.stringify({
          query: this.ADD_QUERY,
          variables: { text },
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const queryResult = await response.json();

      return queryResult;
    }
    return null;
  }
}

export default new StoriesService();
