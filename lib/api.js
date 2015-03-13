var agent = require('superagent-promise');


var API = module.exports = function () {
  this.url = 'http://monitor-service.local.bravi.com.br';
};


API.prototype.all = function() {
  return agent('GET', this.url)
    .end()
    .then(getResultBody);
};


API.prototype.create = function(data) {
  return agent('POST', this.url)
    .send(data)
    .end()
    .then(getResultBody);
};


function getResultBody (res) {
  return res.body;
}
