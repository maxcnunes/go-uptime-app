import React from 'react';
import Router from 'react-router';
import API from './api';


import './create-screen.scss';


export default React.createClass({
  mixins: [ Router.Navigation ],

  handleSubmit: function (e) {
    e.preventDefault();
    var url = this.refs.url.getDOMNode().value;

    API.Target.create({ url: url }).then(function  () {
      this.transitionTo('/');
    }.bind(this));
  },

  render: function() {
    return <div className="create-screen">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">New</h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label for="url">URL</label>
              <input type="text" className="form-control" id="url" placeholder="Enter your URL" ref="url" />
            </div>
            <div className="buttons">
              <input type="submit" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
    </div>;
  }
});
