import React from 'react';
import Router from 'react-router';
import NavBar from './nav-bar.jsx';
const RouteHandler = Router.RouteHandler;


import './go-uptime-app.scss';


export default React.createClass({
  render: function() {
    return <div className="go-uptime-app">
      <NavBar />
      <div className="container theme-showcase">
        <RouteHandler/>
      </div>
    </div>;
  }
});
