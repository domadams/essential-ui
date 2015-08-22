/*******************************************************
 * Client Component Entry Point
 * Sets up client-side routing listening to `pushState` changes
 *
 * This then renders the relevant route handle component based
 * on the defined application routes providing the relevant
 * language translations
 ******************************************************/
import React from 'react';
import Router from 'react-router';
import routes from './routes';

// main contents </div>
let content = document.getElementById('content');

// Create application centralised data - include this when we have some app data
//import parseSafe from '../utils/parse-safe';
//let data = parseSafe(document.getElementById('initial-data').innerHTML, {});

// Start the client-side router using only `pushState`
// with the supplied routes
Router.run(routes, Router.HistoryLocation, (Handler, req) => {
    // render the application from the root application component handler
    React.render(<Handler />, content);
});
