import ServerService from '../ServerService';

class StoriesService {
  constructor() {
    this.QUERY = `
      {
        stories { id, text }
      }
    `;
  }

  async getStories() {
    const response = await fetch(ServerService.url(), {
      method: 'POST',
      body: JSON.stringify({
        query: this.QUERY,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const queryResult = await response.json();

    return queryResult.data.stories;
  }
}

export default new StoriesService();
