/*******************************************************
 * Server Component Entry Point
 * Load the applications translation files and cache Polyglot instances
 *
 * This exports a function, which takes the application config and returns
 * an Express middleware handle to render the application using React-Router
 ******************************************************/
import { compileFile } from 'jade';
import { join as joinPath } from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server'
import { match, RoutingContext } from 'react-router'
import DocumentTitle from 'react-document-title';
// Routes defined in React-Router </Route> components
import routes from './routes';

let layoutPath = joinPath(__dirname, './layout.jade');
let layout = compileFile(layoutPath);

export default () => {
    return (req, res) => {
        // construct data to be returned to client
        let data = {};

        // locals passed to the Jade Template
        let templateLocals = {
            data
        };

        // Note that req.url here should be the full URL path from
        // the original request, including the query string.
        match({routes, location: req.url }, (error, redirectLocation, renderProps) => {
            if (error) {
                res.status(500).send(error.message)
            } else if (redirectLocation) {
                res.redirect(302, redirectLocation.pathname + redirectLocation.search)
            } else if (renderProps) {
                // return with content to respond to client
                templateLocals.content = renderToString(<RoutingContext {...renderProps} />);
                //Set page title from innermost title in page or default to dictionary
                templateLocals.title = DocumentTitle.rewind() || `Essential UI`;
                // send response to client
                res.status(200).send(layout(templateLocals));
            } else {
                //Set page title from innermost title in page or default to dictionary
                templateLocals.title = 'Essential UI | Page not found';
                res.status(404).send('Not found')
            }
        })
    };
};
