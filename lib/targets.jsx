var React = require('react');
var API = require('./api');
var api = new API();

require('./targets.scss');

module.exports = React.createClass({
  getInitialState: function () {
    return { targets: [] };
  },
  componentDidMount: function() {
    return api.all().then(function(result) {
      if (this.isMounted()) this.setState({ targets: result });
    }.bind(this));
  },
  render: function() {
    var rows = this.state.targets.map(function (url) {
      return <div>
        <div className="up">
          <h5><a href="#">{url}</a></h5>
        </div>
      </div>;
    });

    return <section id="targets">{rows}</section>;
  }
});
