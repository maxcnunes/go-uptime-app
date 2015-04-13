import React from 'react';
import Router from 'react-router';
import RSVP from 'rsvp';
import API from './api';


import './edit-screen.scss';


export default React.createClass({
  mixins: [  Router.State, Router.Navigation ],

  getInitialState: function () {
    return {
      target: {},
      tracks: []
    };
  },

  handleSubmit: function () {
    var url = 'http://' + this.refs.url.getDOMNode().value;

    API.Target.edit({ url: url }).then(function  () {
      this.transitionTo('/');
    }.bind(this));
  },

  onDelete: function () {
    if (!confirm('Are you sure you want to delete this item?')) return false;

    API.Target.delete(this.getParams().id).then(function  () {
      this.transitionTo('/');
    }.bind(this));
  },

  componentDidMount: function() {
    var promises = RSVP.hash({
      target: API.Target.findOneById(this.getParams().id),
      tracks: API.Track.find({ targetId: this.getParams().id })
    });

    promises.then(function(result) {
      if (!this.isMounted()) return;

      result.tracks.forEach(function (track) {
        track.statusType = /^2/.test(track.status) ? 'up' : 'down';
      });

      this.setState(result);
    }.bind(this));
  },

  render: function() {
    return <div className="edit-screen">
      <h1>Edit Target</h1>
      <form onSubmit={this.handleSubmit}>
        <div className="row collapse">
          <div className="small-3 large-2 columns">
            <span className="prefix">http://</span>
          </div>
          <div className="small-9 large-10 columns">
            <input type="text" placeholder="Enter your URL..." ref="url" value={this.state.target.url} />
          </div>
        </div>
        <div className="row">
          <input type="submit" id="save" />
          <input type="button" id="delete" value="Delete" onClick={this.onDelete} />
        </div>
      </form>

      <div className="row collapse">
        <table>
          <thead>
            <tr>
              <th>Status</th>
              <th>At</th>
            </tr>
          </thead>
          <tbody>
              {this.state.tracks.map(function (track) {
                return <tr key={track.id}>
                  <td><span className={track.statusType}>{track.status}</span></td>
                  <td>{track.createdAt}</td>
                </tr>;
              })}
          </tbody>
        </table>
      </div>
    </div>;
  }
});
