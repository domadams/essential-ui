<p align="center">
	<img src="http://www.essential-ui.com/images/logo/essential-ui-logo.png" width="80" height="80" alt="Essential UI Logo" />
</p>

# Essential-UI
A UI Toolkit for React.js Websites and Apps

Currently under development; built by [@domadams](http://dominic-adams.com/)

See [essential-ui.com](http://essential-ui.com) for examples and documentation.

## Installation

You can install essential-ui using npm:

    npm install essential-ui --save

## Browser Support

- Chrome (mobile and desktop)
- Safari (mobile and desktop)
- Firefox
- Internet Explorer 10 and up

### Usage
Once you have installed essential-ui as a dependency you can import it into the component you want to use it in. You can then use this in your JSX like any other component

``` js
import {Button} from 'essential-ui';

class SimpleComponent extends React.Component {
    render(){
        return (
            <div>
                <Button size="lg" type="primary" text="Hello!" />
            </div>
        );
    }
}

export default SimpleComponent;
```

## Getting Started for Developers

**Prerequisites** Please ensure that you have Node.js v4.1.x installed [nodejs.org](http://nodejs.org/dist/v4.1.2/) once this is installed upgrade npm (`$ npm install -g npm`).
Then install `gulp` globally (`$ npm install -g gulp`)


To get started fork this repository, clone it, then simply install the dependencies:
```
$ npm install
```

Should you want to run the site locally move into the site directory and install the dependencies:
```
$ npm install
```

Then you can run:
```
$ gulp && node .
```


