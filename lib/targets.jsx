import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router';
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
    target.statusType = 'default';
    if (status > 0) {
      target.statusType = /^2/.test(status) ? 'success' : 'danger';
    }
    return target;
  },
  render: function() {
    return <section id="targets">
      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th>Status</th>
              <th>Target URL</th>
            </tr>
          </thead>
          <tbody>
              {this.state.targets.map(function (target) {
                return <tr key={target.id}>
                  <td><span className={ 'label label-' + target.statusType}>{target.status}</span></td>
                  <td><Link to="edit" params={target}>{target.url}</Link></td>
                </tr>;
              })}
          </tbody>
        </table>
      </div>
    </section>;
  }
});
