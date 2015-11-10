if (process.env.BROWSER) {
    require('./_home.scss');
}

import React, { Component } from 'react';
import { Col } from '../../../dist';

class Home extends Component{
    static displayName = 'Home';

    render() {
        return (
            <div className="home-component">
                <Col span="8of8">
                    <div className="intro">
                        <h2 className="main-title">Essential UI</h2>
                        <h3 className="sub-title">A UI Toolkit for React.js Websites</h3>
                        <a className="view-github" href="https://github.com/domadams/essential-ui">
                            View the project on GitHub
                        </a>
                    </div>
                </Col>
            </div>
        );
    }
}

export default Home;
