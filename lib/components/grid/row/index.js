/*******************************************************
 * Row Component
 * A generic Row component that takes child nodes
 ******************************************************/
import React, { Component, PropTypes } from 'react';

const styles = {
    section: {
        clear: 'both',
        padding: 0,
        margin: 0
    },

    group: {
      display: 'table'
    },

    groupAfter: {
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

        let styleAfter = Object.assign({}, styles.group, styles.groupAfter);

        return (
            <div>
                <div style={styles.group} />
                <div {...this.props} style={styles.section} />
                <div style={styleAfter} />
            </div>
        )
    }
}

export default Row;