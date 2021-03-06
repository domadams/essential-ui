import React from 'react';
import { Link } from 'react-router';

class Logo extends React.Component{
    static displayName = 'Logo';
    render() {
        return (
            <h1>
                <Link className="logo" to={`/`}>
                    <span className="visually-hidden">Essential UI Logo</span>
                    <span className="logo-text">ssential UI</span>
                </Link>
            </h1>
        );
    }
}

export default Logo;
