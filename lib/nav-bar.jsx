import React from 'react';
import Router from 'react-router';
const Link = Router.Link;


import './nav-bar.scss';


export default React.createClass({
  mixins: [ Router.Navigation ],

  render: function() {
    return <nav className="top-bar" data-topbar="">
      <ul className="title-area">
        <li className="name">
          <h1><a href="/">Monitor</a></h1>
        </li>
        <li className="toggle-topbar menu-icon">
          <a href="#">Menu</a>
        </li>
      </ul>

      <section className="top-bar-section">
        <ul className="right">
          <li><Link to="/">List</Link></li>
          <li><Link to="/create">New</Link></li>
        </ul>
      </section>
    </nav>;
  }
});
