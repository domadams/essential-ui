import React from 'react';
import { Button } from '../../../dist';

class Home extends React.Component{
    render() {
        return (
            <div>
                <h2>Hello World!</h2>
                <div>
                    <Button size="lg" text="Hello!" type="primary" />
                </div>
            </div>
        );
    }
}

export default Home;
