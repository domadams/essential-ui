if (process.env.BROWSER) {
    require('./_buttons.scss');
}

import React, { Component } from 'react';
import { Button } from '../../../dist';

class Buttons extends Component{
    static displayName = 'Buttons';

    render() {
        return (
            <div className="buttons-component">
                <h1 className="page-header">Buttons</h1>
                <p className="page-paragraph">
                    Examples of button component and how to use it.
                </p>
                <h2 className="page-sub-header">Sizes</h2>
                <div className="example">
                    <div className="example-component">
                        <Button size="lg" text="Large Button" type="primary" />
                    </div>
                    <div className="example-component">
                        <Button size="md" text="Medium Button" type="primary" />
                    </div>
                    <div className="example-component">
                        <Button size="sm" text="Small Button" type="primary" />
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
                                type=
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
                                type=
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
                                type=
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
                        <Button size="md" text="Button" type="primary" />
                    </div>
                    <div className="example-component">
                        <Button size="md" text="Button" type="secondary" />
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
                                type=
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
                                type=
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
            </div>
        );
    }
}

export default Buttons;