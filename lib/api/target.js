import API from './api';

export default class Target extends API {
  constructor(baseUrl) {
    super(baseUrl);
  }

  /*
   * get all targets
   */
  all() {
    return this.agent('GET', this.baseUrl)
      .end()
      .then(super.handleResult, super.handleError)
      .then(super.getBodyResult);
  }

  /*
   * get all targets
   */
  findOneById(id) {
    return this.agent('GET', `${this.baseUrl}/${id}`)
      .end()
      .then(super.handleResult, super.handleError)
      .then(super.getBodyResult);
  }

  /*
   * create new target
   */
  create(data) {
    return this.agent('POST', this.baseUrl)
      .send(data)
      .end()
      .then(super.handleResult, super.handleError)
      .then(super.getBodyResult);
  }

  /*
   * edit new target
   */
  edit(data) {
    return this.agent('PUT', `${this.baseUrl}/${data.id}`)
      .send(data)
      .end()
      .then(super.handleResult, super.handleError)
      .then(super.getBodyResult);
  }

  /*
   * delete a target
   */
  delete(id) {
    return this.agent('DELETE', `${this.baseUrl}/${id}`)
      .end()
      .then(super.handleResult, super.handleError)
      .then(super.getBodyResult);
  }
}
