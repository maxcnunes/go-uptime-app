import Router from 'react-router';
import React from 'react';
import routes from './routes.jsx';


export default {
  start(el) {
    Router.run(routes, (Handler) => {
      React.render(React.createElement(Handler, null), el);
    });
  }
};
