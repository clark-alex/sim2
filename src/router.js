import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashBoard from './components/DashBoard';
import Wizard1 from './components/Wizard/Wizard1';
import Wizard2 from './components/Wizard/Wizard2';
import Home from './components/Home';

export default (
    <Switch>
        <Route path = '/' component = {Home} exact/>
        <Route path = '/dashboard' component = {DashBoard} />
        <Route path = '/wizard1' component = {Wizard1} />
        <Route path = '/wizard2' component = {Wizard2} />
    </Switch>
)