import React, { Component } from 'react';
import { Button } from '../../../dist';

class Buttons extends Component{
    static displayName = 'Buttons';

    render() {
        return (
            <div className="buttons-component">
                <div>
                    <Button size="lg" text="Hello!" type="primary" />
                </div>
            </div>
        );
    }
}

export default Buttons;