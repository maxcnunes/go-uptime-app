import API from './api';

export default class Track extends API {
  constructor(baseUrl) {
    super(baseUrl);
  }

  /*
   * get all tracks
   */
  all() {
    return this.agent('GET', this.baseUrl)
      .end()
      .then(super.handleResult, super.handleError)
      .then(super.getBodyResult);
  }
}
