import React from 'react';
import Router from 'react-router';
import NavBar from './nav-bar.jsx';
const RouteHandler = Router.RouteHandler;


import './monitor-app.scss';


export default React.createClass({
  render: function() {
    return <div className="monitor-app">
      <NavBar />
      <RouteHandler/>
    </div>;
  }
});
