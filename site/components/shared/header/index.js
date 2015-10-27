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
            </header>
        );
    }
}

export default Header;
