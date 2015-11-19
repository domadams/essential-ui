if (process.env.BROWSER) {
    require('./_buttons.scss');
}

import React, { Component } from 'react';
import { Button } from '../../../dist';
import DocumentTitle from 'react-document-title';

class Buttons extends Component{
    static displayName = 'Buttons';

    render() {
        return (
            <DocumentTitle title="Essential UI | Buttons">
                <div className="buttons-component">
                    <h1 className="page-header">Buttons</h1>
                    <p className="page-paragraph">
                        Examples of button component and how to use it.
                    </p>
                    <h2 className="page-sub-header">Sizes</h2>
                    <div className="example">
                        <div className="example-component">
                            <Button buttonType="primary" size="lg" text="Large Button" />
                        </div>
                        <div className="example-component">
                            <Button buttonType="primary" size="md" text="Medium Button" />
                        </div>
                        <div className="example-component">
                            <Button buttonType="primary" size="sm" text="Small Button" />
                        </div>
                        <h3 className="example-usage">Example Usage:</h3>
                        <div className="example-code">
                            <code>
                                <span className="code-element">
                                    &lt;Button
                                </span>
                                <span className="code-attribute">
                                    size=
                                </span>
                                <span className="code-value">
                                    "lg"
                                </span>
                                <span className="code-attribute">
                                    text=
                                </span>
                                <span className="code-value">
                                    "Large Button"
                                </span>
                                <span className="code-attribute">
                                    buttonType=
                                </span>
                                <span className="code-value">
                                    "primary"
                                </span>
                                <span className="code-element">
                                    /&gt;
                                </span>
                            </code>
                            <br/>
                            <code>
                                <span className="code-element">
                                    &lt;Button
                                </span>
                                <span className="code-attribute">
                                    size=
                                </span>
                                <span className="code-value">
                                    "md"
                                </span>
                                <span className="code-attribute">
                                    text=
                                </span>
                                <span className="code-value">
                                    "Medium Button"
                                </span>
                                <span className="code-attribute">
                                    buttonType=
                                </span>
                                <span className="code-value">
                                    "primary"
                                </span>
                                <span className="code-element">
                                    /&gt;
                                </span>
                            </code>
                            <br/>
                            <code>
                                <span className="code-element">
                                    &lt;Button
                                </span>
                                <span className="code-attribute">
                                    size=
                                </span>
                                <span className="code-value">
                                    "sm"
                                </span>
                                <span className="code-attribute">
                                    text=
                                </span>
                                <span className="code-value">
                                    "Small Button"
                                </span>
                                <span className="code-attribute">
                                    buttonType=
                                </span>
                                <span className="code-value">
                                    "primary"
                                </span>
                                <span className="code-element">
                                    /&gt;
                                </span>
                            </code>
                        </div>
                    </div>
                    <h2 className="page-sub-header">Variants</h2>
                    <div className="example">
                        <div className="example-component">
                            <Button buttonType="primary" size="md" text="Button" />
                        </div>
                        <div className="example-component">
                            <Button buttonType="secondary" size="md" text="Button" />
                        </div>
                        <h3 className="example-usage">Example Usage:</h3>
                        <div className="example-code">
                            <code>
                                <span className="code-element">
                                    &lt;Button
                                </span>
                                <span className="code-attribute">
                                    size=
                                </span>
                                <span className="code-value">
                                    "md"
                                </span>
                                <span className="code-attribute">
                                    text=
                                </span>
                                <span className="code-value">
                                    "Button"
                                </span>
                                <span className="code-attribute">
                                    buttonType=
                                </span>
                                <span className="code-value">
                                    "primary"
                                </span>
                                <span className="code-element">
                                    /&gt;
                                </span>
                            </code>
                            <br/>
                            <code>
                                <span className="code-element">
                                    &lt;Button
                                </span>
                                <span className="code-attribute">
                                    size=
                                </span>
                                <span className="code-value">
                                    "md"
                                </span>
                                <span className="code-attribute">
                                    text=
                                </span>
                                <span className="code-value">
                                    "Button"
                                </span>
                                <span className="code-attribute">
                                    buttonType=
                                </span>
                                <span className="code-value">
                                    "secondary"
                                </span>
                                <span className="code-element">
                                    /&gt;
                                </span>
                            </code>
                        </div>
                    </div>
                    <h2 className="page-sub-header">Link Button</h2>
                    <div className="example">
                        <div className="example-component">
                            <Button buttonType="primary" href="http://www.essential-ui.com/" size="md" text="Large Button" />
                        </div>
                        <h3 className="example-usage">Example Usage:</h3>
                        <div className="example-code">
                            <code>
                                <span className="code-element">
                                    &lt;Button
                                </span>
                                <span className="code-attribute">
                                    size=
                                </span>
                                <span className="code-value">
                                    "md"
                                </span>
                                <span className="code-attribute">
                                    text=
                                </span>
                                <span className="code-value">
                                    "Button"
                                </span>
                                <span className="code-attribute">
                                    buttonType=
                                </span>
                                <span className="code-value">
                                    "primary"
                                </span>
                                <span className="code-attribute">
                                    href=
                                </span>
                                <span className="code-value">
                                    "http://www.essential-ui.com/"
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

export default Buttons;