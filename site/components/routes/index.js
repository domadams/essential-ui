import React from 'react';
import { Route, DefaultRoute } from 'react-router';
import App from '../app';
import Home from '../home';

const routes = (
    <Route handler={App} name="home" path="/">
        <DefaultRoute handler={Home}/>
    </Route>
);

export default routes;
