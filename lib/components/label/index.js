/*******************************************************
 * Label Component
 * A generic label component that takes two properties
 * - labelFor - identify what input field the label relates to
 * - labelText - the text to display in the label
 ******************************************************/
import React, { Component, PropTypes } from 'react';

class Label extends Component {
    static displayName = 'Label';
    static propTypes = {
        labelFor: React.PropTypes.string,
        labelText: React.PropTypes.string
    };
    constructor(props){
        super(props);
    }
    render(){
        const labelFor = this.props.labelFor;
        const labelText = this.props.labelText;

        return (
            <label htmlFor={labelFor}>
                {labelText}
            </label>
        );
    }
}

export default Label;
