var React = require('react');
var Router = require('react-router');
var API = require('./api');
var api = new API();


require('./create-screen.scss');


module.exports = React.createClass({
  mixins: [ Router.Navigation ],

  handleSubmit: function () {
    var url = 'http://' + this.refs.url.getDOMNode().value;

    api.create({ url: url }).then(function  () {
      this.transitionTo('/');
    }.bind(this));
  },

  render: function() {
    return <div className="create-screen">
      <h1>New Target</h1>
      <form onSubmit={this.handleSubmit}>
        <div className="row collapse">
          <div className="small-3 large-2 columns">
            <span className="prefix">http://</span>
          </div>
          <div className="small-9 large-10 columns">
            <input type="text" placeholder="Enter your URL..." ref="url" />
          </div>
        </div>
        <div className="row collapse">
          <input type="submit" className="button" />
        </div>
      </form>
    </div>;
  }
});
