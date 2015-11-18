if (process.env.BROWSER) {
    require('./_home.scss');
}

import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

class Home extends Component{
    static displayName = 'Home';

    render() {
        return (
            <DocumentTitle title="Essential UI | Home">
                <div className="home-component">
                    <div className="intro">
                        <h2 className="main-title">Essential UI</h2>
                        <h3 className="sub-title">A UI Toolkit for React.js Websites</h3>
                        <a className="view-github" href="https://github.com/domadams/essential-ui">
                            View the project on GitHub
                        </a>
                    </div>
                </div>
            </DocumentTitle>
        );
    }
}

export default Home;
