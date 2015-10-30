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
                    <h2 className="main-title">Essential UI</h2>
                    <h3 className="sub-title">A UI Toolkit for React.js Websites</h3>
                    <a className="view-github" href="https://github.com/domadams/essential-ui">
                        View the project on GitHub
                    </a>
                </div>
            </div>
        );
    }
}

export default Home;
