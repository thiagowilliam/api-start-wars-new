import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import DetailsPlanet from '../pages/DetailsPlanet';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/:planet/:id" component={DetailsPlanet} />
  </Switch>
);

export default Routes;
