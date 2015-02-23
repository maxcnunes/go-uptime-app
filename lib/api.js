var agent = require('superagent-promise');

var API = module.exports = function () {
  this.url = 'http://10.10.10.10:3000';
};

API.prototype.all = function() {
  return agent('GET', this.url)
    .end()
    .then(function (res) {
      return res.body;
    });
};
