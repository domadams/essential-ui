if (process.env.BROWSER) {
    require('./_home.scss');
}

import React, { Component } from 'react';

class Home extends Component{
    static displayName = 'Home';

    render() {
        return (
            <div className="home-component">
                <div className="intro col span_8_of_8">
                    <h2>Essential UI</h2>
                    <h3>A UI Toolkit for React.js Websites</h3>
                </div>
            </div>
        );
    }
}

export default Home;
