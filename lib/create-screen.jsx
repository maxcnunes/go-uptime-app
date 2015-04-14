import React from 'react';
import Router from 'react-router';
import TagsInput from 'react-tagsinput';
import API from './api';


import './create-screen.scss';
import './react-tagsinput.scss';


export default React.createClass({
  mixins: [ Router.Navigation ],

  handleSubmit: function (e) {
    e.preventDefault();
    var target = {
      url: this.refs.url.getDOMNode().value,
      emails: this.refs.tags.getTags()
    };

    API.Target.create(target).then(function  () {
      this.transitionTo('/');
    }.bind(this));
  },

  validateEmail: function (value) {
    return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value);
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
            <div className="form-group">
              <label>Emails notification</label>
              <TagsInput ref="tags" placeholder={"Add an email"} validate={this.validateEmail} />
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
