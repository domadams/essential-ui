if (process.env.BROWSER) {
    require('../../assets/styles/_normalize.scss');
    require('./_app.scss');
}

import React, { Component, PropTypes } from 'react';
import Header from '../shared/header';

class App extends Component{
    static displayName = 'App';
    static propTypes = {
        children: PropTypes.object
    };

    render() {
        return (
            <div className="app-component">
                <Header />
                <section>
                    {/* Render Main Content */}
                    {this.props.children}
                </section>
            </div>
        );
    }
}

export default App;
