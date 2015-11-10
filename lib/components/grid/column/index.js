/*******************************************************
 * Column Component
 * A generic Column component that takes number of columns
 * to span
 ******************************************************/
import React, { Component, PropTypes } from 'react';
const COLUMN_SIZES = ['8of8', '7of8', '6of8','5of8', '4of8', '3of8','2of8', '1of8'];

const styles = {
    col: {
        display: 'block',
        float: 'left',
        margin: '1% 0 1% 0'
    },

    span: {
        '8of8' : {
            width: '100%'
        },
        '7of8' : {
            width: '87.3%'
        },
        '6of8' : {
            width: '74.6%'
        },
        '5of8' : {
            width: '61.9%'
        },
        '4of8' : {
            width: '49.2%'
        },
        '3of8' : {
            width: '36.5%'
        },
        '2of8' : {
            width: '23.8%'
        },
        '1of8' : {
            width: '11.1%'
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