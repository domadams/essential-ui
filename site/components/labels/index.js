if (process.env.BROWSER) {
    require('./_labels.scss');
}

import React, { Component } from 'react';
import { Label } from '../../../dist';

class Labels extends Component{
    static displayName = 'Labels';

    render() {
        return (
            <div className="labels-component">
                <h1 className="page-header">Labels</h1>
                <p className="page-paragraph">
                    Examples of label component and how to use it.
                </p>
                <div className="example">
                    <div className="example-component">
                       <Label labelFor="input" labelText="Here is a label"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Labels;