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
                </div>
                <h2 className="page-sub-header">Variants</h2>
                <div className="example">
                    <div className="example-component">
                        <Button size="md" text="Button" type="primary" />
                    </div>
                    <div className="example-component">
                        <Button size="md" text="Button" type="secondary" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Buttons;