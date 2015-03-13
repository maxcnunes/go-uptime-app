import React from 'react';
import { Route } from 'react-router';
import { DefaultRoute } from 'react-router';


import Application from './monitor-app.jsx';
import ListScreen from './list-screen.jsx';
import CreateScreen from './create-screen.jsx';


module.exports = <Route name="main" path="/" handler={Application}>
  <Route name="create" handler={CreateScreen}/>
  <DefaultRoute handler={ListScreen}/>
</Route>;
