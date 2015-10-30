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
                <div className="col span_4_of_8">
                    <Logo />
                </div>
                <div className="col span_4_of_8">
                    <a className="github" href="https://github.com/domadams/essential-ui">
                        <span className="visually-hidden">Fork the code on GitHub</span>
                    </a>
                </div>
                <div className="col span_8_of_8">
                    <ul className="nav-links">
                        <li>
                            <Link to={`/buttons`}>Buttons</Link>
                        </li>
                        <li>
                            <Link to={`/`}>Labels</Link>
                        </li>
                        <li>
                            <Link to={`/`}>Inputs</Link>
                        </li>
                        <li>
                            <Link to={`/`}>Forms</Link>
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
}

export default Header;
