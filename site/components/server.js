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
import Router from 'react-router';
// Routes defined in React-Router </Route> components
import routes from './routes';

let layoutPath = joinPath(__dirname, './layout.jade');
let layout = compileFile(layoutPath);

export default () => {
    return (req, res) => {
        let url = req.url;

        // construct data to be returned to client
        let data = {};

        // locals passed to the Jade Template
        let templateLocals = {
            data
        };

        // Execute route matching with React-Router
        Router.run(routes, url, Handler => {
            // return with content to respond to client
            templateLocals.content = React.renderToString(
                <Handler />
            );

            // send response to client
            res.send(layout(templateLocals));
        });
    };
};
