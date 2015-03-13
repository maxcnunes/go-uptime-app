import agent from 'superagent-promise';


export default class API {
  constructor() {
    this.url = 'http://monitor-service.local.bravi.com.br';
  }

  /*
   * get all targets
   */
  all() {
    return agent('GET', this.url)
      .end()
      .then(this.getResultBody);
  }

  /*
   * create new target
   */
  create(data) {
    return agent('POST', this.url)
      .send(data)
      .end()
      .then(this.getResultBody);
  }


  getResultBody (res) {
    return res.body;
  }
}
