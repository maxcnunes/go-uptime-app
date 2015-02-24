var React = require('react');


require('./monitor-app.scss');
var NavBar = require('./nav-bar.jsx');
var Targets = require('./targets.jsx');

module.exports = React.createClass({
  render: function() {
    return <div className="monitor-app">
      <NavBar />
      <Targets />
    </div>;
  }
});
