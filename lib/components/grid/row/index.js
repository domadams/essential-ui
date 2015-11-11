/*******************************************************
 * Row Component
 * A generic Row component that takes child nodes
 ******************************************************/
import React, { Component, PropTypes } from 'react';

const styles = {
    row: {
        margin: '0 -1.5em'
    },

    rowBefore: {
      display: 'table'
    },

    rowAfter: {
        clear: 'both'
    }
};

class Row extends Component {
    static displayName = 'Row';
    static propTypes = {
        children: PropTypes.node.isRequired
    };
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <div style={styles.rowBefore} />
                <div {...this.props} style={styles.row} />
                <div style={styles.rowAfter} />
            </div>
        )
    }
}

export default Row;