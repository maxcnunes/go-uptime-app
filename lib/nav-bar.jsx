import React from 'react';
import Router from 'react-router';
const Link = Router.Link;


import './nav-bar.scss';


export default React.createClass({
  mixins: [ Router.Navigation ],

  render: function() {
    return <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link to="/" className="navbar-brand">Monitor</Link>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li><Link to="/create">New</Link></li>
          </ul>
        </div>
      </div>
    </nav>;
  }
});
