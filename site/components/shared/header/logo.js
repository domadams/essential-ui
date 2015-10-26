import React from 'react';

class Logo extends React.Component{
    static displayName = 'Logo';
    render() {
        return (
            <a href="http://www.essential-ui.com">
                <div className="logo">
                    <span className="visually-hidden">Essential UI Logo</span>
                </div>
            </a>
        );
    }
}

export default Logo;
