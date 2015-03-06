var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;


require('./monitor-app.scss');
var NavBar = require('./nav-bar.jsx');


module.exports = React.createClass({
  render: function() {
    return <div className="monitor-app">
      <NavBar />
      <RouteHandler/>
    </div>;
  }
});
