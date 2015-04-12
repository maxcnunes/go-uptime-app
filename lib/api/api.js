import agent from 'superagent-promise';

export default class API {
  constructor(baseUrl){
    this.baseUrl = baseUrl;
    this.agent = agent;
  }

  handleResult(res){
    if (!/^2/.test(res.status)) {
      throw { status: res.status, error: res.body || res.text };
    }

    return res;
  }

  handleError(){
    console.log(arguments);
  }

  getBodyResult(res){
    return res.body;
  }
}
