if (process.env.BROWSER) {
    require('./_home.scss');
}

import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component{
    render() {
        return (
            <div className="home-component">
                <div className="intro">
                    <h2>Essential UI</h2>
                    <h3>A UI Toolkit for React.js Websites</h3>
                </div>
                <div>
                    <Link to={`/buttons`}>Buttons</Link>
                </div>
            </div>
        );
    }
}

export default Home;
