var React = require('react');
var Route = require('react-router').Route;
var DefaultRoute = require('react-router').DefaultRoute;


var Application = require('./monitor-app.jsx');
var ListScreen = require('./list-screen.jsx');
var CreateScreen = require('./create-screen.jsx');


module.exports = <Route name="main" path="/" handler={Application}>
  <Route name="create" handler={CreateScreen}/>
  <DefaultRoute handler={ListScreen}/>
</Route>;
