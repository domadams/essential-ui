if (process.env.BROWSER) {
    require('./_footer.scss');
}

import React, { Component } from 'react';

class Footer extends Component{
    static displayName = 'Footer';

    render() {
        return (
            <footer className="footer-component col span_8_of_8">
                <p>
                    Copyright &copy; 2015. Essential-UI.com | Built by <a href="http://www.dominic-adams.com">Dominic Adams</a>
                </p>
            </footer>
        );
    }
}

export default Footer;
