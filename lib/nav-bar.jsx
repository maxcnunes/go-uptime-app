var React = require("react");


require("./nav-bar.scss");


module.exports = React.createClass({
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
          <li><a href="#">List</a></li>
          <li><a href="#">New</a></li>
        </ul>
      </section>
    </nav>;
  }
});
