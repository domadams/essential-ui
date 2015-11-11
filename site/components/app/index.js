if (process.env.BROWSER) {
    require('../../assets/styles/_normalize.scss');
    require('../../assets/styles/_shared.scss');
    require('./_app.scss');
}

import React, { Component, PropTypes } from 'react';
import { Row, Col } from '../../../dist';
import Header from '../shared/header';
import Footer from '../shared/footer';

class App extends Component{
    static displayName = 'App';
    static propTypes = {
        children: PropTypes.object
    };

    render() {
        return (
            <div className="app-component">
                <Row>
                    <Header />
                </Row>
                <Row>
                    <Col span="8of8">
                        {/* Render Main Content */}
                        {this.props.children}
                    </Col>
                </Row>
                <Row>
                    <Col span="8of8">
                        <Footer />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;
