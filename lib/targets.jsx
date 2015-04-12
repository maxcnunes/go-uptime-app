import _ from 'lodash';
import React from 'react';
import API from './api';
import Websocket from './websocket';

const websocket = new Websocket();


import './targets.scss';


export default React.createClass({
  getInitialState: function () {
    websocket.onMessage(this.updateTarget);
    return { targets: [] };
  },
  componentDidMount: function() {
      if (this.isMounted()) this.setState({ targets: result });
    API.Target.all().then(function(result) {
    }.bind(this));
  },
  updateTarget: function (event) {
    if (!this.isMounted()) return;

    var target = _.find(this.state.targets, { url: event.target.url });
    if (!target) {
      target = event.target;
      this.state.targets.push(target);
    }
    target.status = event.target.status;
    this.setState({ targets: this.state.targets });
  },
  render: function() {
    return <section id="targets">{
      this.state.targets.map(function (target) {
        return <div key={target.url}>
          <div className={target.status}>
            <h5><a href="#">{target.url}</a></h5>
          </div>
        </div>;
      })
    }</section>;
  }
});
