var React = require('react');


require('./create-screen.scss');


module.exports = React.createClass({
  render: function() {
    return <div className="create-screen">
      <h1>Create Screen</h1>
      <input type="text" value="Target name" />
    </div>;
  }
});
