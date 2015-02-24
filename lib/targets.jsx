var _ = require('lodash');
var React = require('react');
var API = require('./api');
var Websocket = require('./websocket');
var api = new API();
var websocket = new Websocket();

require('./targets.scss');

module.exports = React.createClass({
  getInitialState: function () {
    websocket.onMessage(this.updateTarget);
    return { targets: [] };
  },
  componentDidMount: function() {
    api.all().then(function(result) {
      if (this.isMounted()) this.setState({ targets: result });
    }.bind(this));
  },
  updateTarget: function (event) {
    var target = _.find(this.state.targets, { url: event.target.url });
    if (!target) {
      target = event.target;
      this.state.targets.push(target);
    }
    target.status = event.target.status;
    this.setState({ targets: this.state.targets });
  },
  render: function() {
    return <section id="targets">{
      this.state.targets.map(function (target) {
        return <div key={target.url}>
          <div className={target.status}>
            <h5><a href="#">{target.url}</a></h5>
          </div>
        </div>;
      })
    }</section>;
  }
});
