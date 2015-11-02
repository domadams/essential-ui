if (process.env.BROWSER) {
    require('../../assets/styles/_normalize.scss');
    require('../../assets/styles/_grid.scss');
    require('../../assets/styles/_shared.scss');
    require('./_app.scss');
}

import React, { Component, PropTypes } from 'react';
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
                <div className="section group">
                    <Header />
                </div>
                <div className="section group">
                    {/* Render Main Content */}
                    {this.props.children}
                </div>
                <div className="section group">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;
