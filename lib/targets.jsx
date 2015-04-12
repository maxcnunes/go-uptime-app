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
    API.Target.all().then(function(result) {
      if (!this.isMounted()) return;

      this.setState({ targets: result.map(this.setStatus) });
    }.bind(this));
  },
  updateTarget: function (event) {
    if (!this.isMounted()) return;

    var target = _.find(this.state.targets, { url: event.target.url });
    if (!target) {
      target = event.target;
      this.state.targets.push(target);
    }
    this.setStatus(target, event);

    this.setState({ targets: this.state.targets });
  },
  setStatus: function (target, event) {
    var status = (event && event.target || target).status;
    target.status = 'none';
    if (status > 0) {
      target.status = /^2/.test(status) ? 'up' : 'down';
    }
    return target;
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
