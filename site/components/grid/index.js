if (process.env.BROWSER) {
    require('./_grid.scss');
}

import React, { Component } from 'react';
import { Row, Col } from '../../../dist';

class Grid extends Component{
    static displayName = 'Grid';

    render() {
        return (
            <div className="grid-component">
                <h1 className="page-header">Grid</h1>
                <p className="page-paragraph">
                    Examples of grid components and how to use them.
                </p>
                <h2 className="page-sub-header">Row</h2>
                <div className="example">
                    <Row>
                        <p className="highlight">
                            I am a row
                        </p>
                    </Row>
                </div>
                <h2 className="page-sub-header">8 Columns</h2>
                <div className="example">
                    <Row>
                        <Col span="1of8">
                            <p className="highlight">
                                Column 1
                            </p>
                        </Col>
                        <Col span="1of8">
                            <p className="highlight">
                                Column 2
                            </p>
                        </Col>
                        <Col span="1of8">
                            <p className="highlight">
                                Column 3
                            </p>
                        </Col>
                        <Col span="1of8">
                            <p className="highlight">
                                Column 4
                            </p>
                        </Col>
                        <Col span="1of8">
                            <p className="highlight">
                                Column 5
                            </p>
                        </Col>
                        <Col span="1of8">
                            <p className="highlight">
                                Column 6
                            </p>
                        </Col>
                        <Col span="1of8">
                            <p className="highlight">
                                Column 7
                            </p>
                        </Col>
                        <Col span="1of8">
                            <p className="highlight">
                                Column 8
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="2of8">
                            <p className="highlight">
                                Column 1
                            </p>
                        </Col>
                        <Col span="2of8">
                            <p className="highlight">
                                Column 2
                            </p>
                        </Col>
                        <Col span="2of8">
                            <p className="highlight">
                                Column 3
                            </p>
                        </Col>
                        <Col span="2of8">
                            <p className="highlight">
                                Column 4
                            </p>
                        </Col>
                        <Col span="2of8">
                            <p className="highlight">
                                Column 5
                            </p>
                        </Col>
                        <Col span="2of8">
                            <p className="highlight">
                                Column 6
                            </p>
                        </Col>
                        <Col span="2of8">
                            <p className="highlight">
                                Column 7
                            </p>
                        </Col>
                        <Col span="2of8">
                            <p className="highlight">
                                Column 8
                            </p>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Grid;