import React from 'react';
import { RouteHandler } from 'react-router';

class App extends React.Component{
    static displayName = 'App';

    render() {
        return (
            <div>
                <header>
                    <h1>Essential UI</h1>
                </header>
                <section>
                    {/* Render Main Content */}
                    <RouteHandler/>
                </section>
            </div>
        );
    }
}

export default App;
