import React from 'react';
import Targets from './targets.jsx';


import './list-screen.scss';


export default React.createClass({
  render: function() {
    return <div className="list-screen">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Targets</h3>
        </div>
        <div className="panel-body">
          <Targets />
        </div>
      </div>
    </div>;
  }
});
