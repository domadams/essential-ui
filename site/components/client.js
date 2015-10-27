/*******************************************************
 * Client Component Entry Point
 * Sets up client-side routing listening to `pushState` changes
 *
 * This then renders the relevant route handle component based
 * on the defined application routes providing the relevant
 * language translations
 ******************************************************/
import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes';

// main contents </div>
let content = document.getElementById('content');

// Create application centralised data - include this when we have some app data
//import parseSafe from '../utils/parse-safe';
//let data = parseSafe(document.getElementById('initial-data').innerHTML, {});

//set up history api
let history = createBrowserHistory();

// Start the client-side router using only `pushState`
// with the supplied routes
ReactDOM.render((
    <Router history={history} routes={routes} />
), content);
