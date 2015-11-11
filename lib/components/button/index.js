/*******************************************************
 * Button Component
 * A generic button component that takes three properties
 * - type - if the button is primary or secondary
 * - size - the size class to apply to the button
 * - text - the text to show in the button
 ******************************************************/

import React, { Component, PropTypes } from 'react';

const BUTTON_SIZES = ['lg', 'md', 'sm'];
const BUTTON_TYPES = ['primary', 'secondary'];
const colors = {
    white: '#FFF',
    blue: '#00539f',
    brightBlue: '#009cda'
};

const styles = {
    base: {
        border: '1px solid',
        borderRadius: 50,
        cursor: 'pointer',
        lineHeight: 1,
        textAlign: 'center',
        textDecoration: 'none',
        WebkitTransition: 'background 0.2s ease-out,color 0.2s ease-out,border-color 0.2s ease-out'
    },

    primary: {
        background:  colors.blue,
        borderColor: 'transparent',
        color: colors.white,
        hovered: {
            background: colors.brightBlue
        }
    },

    secondary: {
        background: colors.white,
        borderColor: colors.blue,
        color: colors.blue,
        hovered: {
            borderColor: colors.brightBlue,
            color: colors.brightBlue
        }
    },

    lg: {
        fontSize: '2rem',
        padding: '14px 50px'
    },

    md: {
        fontSize: '1.2rem',
        padding: '8px 30px'
    },

    sm: {
        fontSize: '0.9rem',
        padding: '4px 30px'
    }
};

class Button extends Component {
    static displayName = 'Button';
    static propTypes = {
        size: PropTypes.oneOf(BUTTON_SIZES),
        text: PropTypes.string,
        type: PropTypes.oneOf(BUTTON_TYPES)
    };

    static defaultProps = {
        size: 'md',
        type: 'primary'
    };

    constructor(props) {
        super(props);
        this.toggleHover = this.toggleHover.bind(this);
        this.state = {
            hovered: false
        };
    }

    toggleHover(){
        this.setState({hovered: !this.state.hovered})
    }

    render(){
        const type = this.props.type;
        const size = this.props.size;
        const text = this.props.text;

        let style = Object.assign({}, styles.base, styles[type], styles[size]);

        if(this.state.hovered){
            style = Object.assign({}, styles.base, styles[type], styles[size], styles[type].hovered);
        }

        return (
            <button onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} style={style} title={text} type="submit">{text}</button>
        );
    }
}

export default Button;
