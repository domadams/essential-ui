if (process.env.BROWSER) {
    require('../../assets/styles/_normalize.scss');
    require('./_app.scss');
}

import React from 'react';
import { RouteHandler } from 'react-router';
import Header from '../shared/header';

class App extends React.Component{
    static displayName = 'App';

    render() {
        return (
            <div className="app-component">
                <Header />
                <section>
                    {/* Render Main Content */}
                    <RouteHandler/>
                </section>
            </div>
        );
    }
}

export default App;
