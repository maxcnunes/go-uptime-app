var agent = require('superagent-promise');

var API = module.exports = function () {
  this.url = 'http://monitor-service.local.bravi.com.br';
};

API.prototype.all = function() {
  return agent('GET', this.url)
    .end()
    .then(function (res) {
      return res.body;
    });
};
