if (process.env.BROWSER) {
    require('./_header.scss');
}

import React from 'react';
import Logo from './logo';
import { Link } from 'react-router';

class Header extends React.Component{
    static displayName = 'Header';

    render() {
        return (
            <header className="header-component">
                <div className="col span_2_of_8">
                    <Logo />
                </div>
                <div className="col span_5_of_8">
                    <Link to={`/buttons`}>Buttons</Link>
                </div>
                <div className="col span_1_of_8">
                    <a href="https://github.com/domadams/essential-ui" className="github">
                        <span className="visually-hidden">Fork the code on GitHub</span>
                    </a>
                </div>
            </header>
        );
    }
}

export default Header;
