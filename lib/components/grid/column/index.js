/*******************************************************
 * Column Component
 * A generic Column component that takes number of columns
 * to span
 ******************************************************/
import React, { Component, PropTypes } from 'react';
const COLUMN_SIZES = ['8of8', '7of8', '6of8','5of8', '4of8', '3of8','2of8', '1of8'];

const styles = {
    col: {
        width: '100%',
        float: 'left',
        boxSizing: 'border-box',
        padding: '0  1.5em'
    },

    span: {
        '8of8' : {
            width: '100%'
        },
        '7of8' : {
            width: '87.5%'
        },
        '6of8' : {
            width: '75%'
        },
        '5of8' : {
            width: '62.5%'
        },
        '4of8' : {
            width: '50%'
        },
        '3of8' : {
            width: '37.5%'
        },
        '2of8' : {
            width: '25%'
        },
        '1of8' : {
            width: '12.5%'
        }
    }
};

class Column extends Component {
    static displayName = 'Column';
    static propTypes = {
        children: PropTypes.node.isRequired,
        span: PropTypes.string
    };

    static defaultProps = {
        span: '8of8'
    };

    constructor(props){
        super(props);
    }

    render(){
        const span = this.props.span;

        let colStyle = Object.assign({}, styles.col, styles.span[span]);

        return (
            <div style={colStyle} {...this.props} />
        )
    }
}

export default Column;