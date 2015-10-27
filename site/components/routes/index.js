import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../app';
import Home from '../home';
import Buttons from '../buttons';

const routes = (
    <Route component={App} path="/">
        <IndexRoute component={Home}/>
        <Route component={Buttons} path="buttons"/>
    </Route>
);

export default routes;
