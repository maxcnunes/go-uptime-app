import React from 'react';
import { Route } from 'react-router';
import { DefaultRoute } from 'react-router';


import Application from './go-uptime-app.jsx';
import ListScreen from './list-screen.jsx';
import CreateScreen from './create-screen.jsx';
import EditScreen from './edit-screen.jsx';


module.exports = <Route name="main" path="/" handler={Application}>
  <Route name="create" handler={CreateScreen}/>
  <Route name="edit" path="/:id" handler={EditScreen}/>
  <DefaultRoute handler={ListScreen}/>
</Route>;
