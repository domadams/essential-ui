import React from 'react';
import { Button } from '../../../dist';
import { Link } from 'react-router';

class Buttons extends React.Component{
    render() {
        return (
            <div className="buttons-component">
                <div>
                    <Button size="lg" text="Hello!" type="primary" />
                </div>
                <div>
                    <Link to={`/`}>Home</Link>
                </div>
            </div>
        );
    }
}

export default Buttons;