var React = require('react');


require('./list-screen.scss');
var Targets = require('./targets.jsx');


module.exports = React.createClass({
  render: function() {
    return <div className="list-screen">
      <h1>List Screen</h1>
      <Targets />
    </div>;
  }
});
