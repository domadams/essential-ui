if (process.env.BROWSER) {
    require('./_labels.scss');
}

import React, { Component } from 'react';
import { Label } from '../../../dist';
import DocumentTitle from 'react-document-title';

class Labels extends Component{
    static displayName = 'Labels';

    render() {
        return (
            <DocumentTitle title="Essential UI | Labels">
                <div className="labels-component">
                    <h1 className="page-header">Labels</h1>
                    <p className="page-paragraph">
                        Examples of label component and how to use it.
                    </p>
                    <div className="example">
                        <div className="example-component">
                           <Label labelFor="input" labelText="Here is a label"/>
                        </div>
                        <h3 className="example-usage">Example Usage:</h3>
                        <div className="example-code">
                            <code>
                                <span className="code-element">
                                    &lt;Label
                                </span>
                                <span className="code-attribute">
                                    labelFor=
                                </span>
                                <span className="code-value">
                                    "input"
                                </span>
                                <span className="code-attribute">
                                    labelText=
                                </span>
                                <span className="code-value">
                                    "Here is a label"
                                </span>
                                <span className="code-element">
                                    /&gt;
                                </span>
                            </code>
                        </div>
                    </div>
                </div>
            </DocumentTitle>
        );
    }
}

export default Labels;