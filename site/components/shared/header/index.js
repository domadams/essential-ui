if (process.env.BROWSER) {
    require('./_header.scss');
}

import React from 'react';
import Logo from './logo';
import { Link } from 'react-router';
import { Col } from '../../../../dist';

class Header extends React.Component{
    static displayName = 'Header';

    render() {
        return (
            <header className="header-component">
                <Col span="4of8">
                    <Logo />
                </Col>
                <Col span="4of8">
                    <a className="github" href="https://github.com/domadams/essential-ui">
                        <span className="visually-hidden">Fork the code on GitHub</span>
                    </a>
                </Col>
                <Col span="8of8">
                    <ul className="nav-links">
                        <li>
                            <Link to={`/buttons`}>Buttons</Link>
                        </li>
                        <li>
                            <Link to={`/labels`}>Labels</Link>
                        </li>
                        <li>
                            <Link to={`/grid`}>Grid</Link>
                        </li>
                    </ul>
                </Col>
            </header>
        );
    }
}

export default Header;
