if (process.env.BROWSER) {
    require('../../assets/styles/_normalize.scss');
    require('../../assets/styles/_shared.scss');
    require('./_app.scss');
}

import React, { Component, PropTypes } from 'react';
import { Row } from '../../../dist';
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
                    {/* Render Main Content */}
                    {this.props.children}
                </Row>
                <Row>
                    <Footer />
                </Row>
            </div>
        );
    }
}

export default App;
