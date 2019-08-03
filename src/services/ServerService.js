class ServerService {
  constructor() {
    this.API_URL = process.env.API_URL || 'graphql';
  }

  url() {
    return this.API_URL;
  }
}

export default new ServerService();
