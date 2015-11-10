if (process.env.BROWSER) {
    require('./_footer.scss');
}

import React, { Component } from 'react';
import { Col } from '../../../../dist';

class Footer extends Component{
    static displayName = 'Footer';

    render() {
        return (
            <footer className="footer-component">
                <Col span="8of8">
                    <p>
                        Copyright &copy; 2015. Essential-UI.com | Built by <a href="http://www.dominic-adams.com">Dominic Adams</a>
                    </p>
                </Col>
            </footer>
        );
    }
}

export default Footer;
