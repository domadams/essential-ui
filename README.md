# Essential-UI
A UI Toolkit for React.js Websites and Apps

## Installation

You can install essential-ui using npm:

    npm install -g essential-ui

### Usage
Once you have installed essential-ui as a dependency you can import it into the component you want to use it in

``` js
  import {Button} from 'essential-ui';
```

You can then use this in your JSX like any other component

``` js
    class SimpleComponent extends React.Component {
        render(){
            return (
                <div>
                    <Button size="lg" type="primary" text="Hello!" />
                </div>
            );
        }
    }

    export default Button;
```

## Getting Started for Developers

**Prerequisites** Please ensure that you have Node.js v0.12.x installed [nodejs.org](http://nodejs.org/dist/v0.12.3/) once this is installed upgrade npm (`$ npm install -g npm`).
Then install `gulp` globally (`$ npm install -g gulp`)


To get started simply fork this repository, clone it, then simply install the dependencies:
```
$ npm install
```
