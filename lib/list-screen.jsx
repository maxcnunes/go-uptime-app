import React from 'react';
import Targets from './targets.jsx';


import './list-screen.scss';


export default React.createClass({
  render: function() {
    return <div className="list-screen">
      <h1>List Screen</h1>
      <Targets />
    </div>;
  }
});
