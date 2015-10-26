if (process.env.BROWSER) {
    require('./_header.scss');
}

import React from 'react';
import Logo from './logo';

class Header extends React.Component{
    static displayName = 'Header';

    render() {
        return (
            <header>
                <Logo />
                <h1>Essential UI</h1>
            </header>
        );
    }
}

export default Header;
