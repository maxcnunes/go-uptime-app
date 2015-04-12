import API from './api';

export default class Track extends API {
  constructor(baseUrl) {
    super(baseUrl);
  }

  find(query) {
    return this.agent('GET', this.baseUrl)
      .query(query)
      .end()
      .then(super.handleResult, super.handleError)
      .then(super.getBodyResult);
  }
}
