if (process.env.BROWSER) {
    require('./_grid.scss');
}

import React, { Component } from 'react';
import { Row, Col } from '../../../dist';
import DocumentTitle from 'react-document-title';

class Grid extends Component{
    static displayName = 'Grid';

    render() {
        return (
            <DocumentTitle title="Essential UI | Grid">
                <div className="grid-component">
                    <h1 className="page-header">Grid</h1>
                    <p className="page-paragraph">
                        Examples of grid components and how to use them.
                    </p>
                    <h2 className="page-sub-header">Row</h2>
                    <div className="example">
                        <Row>
                            <Col span="8of8">
                                <p className="highlight">
                                    I am a row
                                </p>
                            </Col>
                        </Row>
                        <h3 className="example-usage">Example Usage:</h3>
                        <div className="example-code">
                            <code>
                                <span className="code-element">
                                    &lt;Row&gt;
                                </span>
                                <div className="indent">
                                    <span className="code-element">
                                        &lt;Col
                                    </span>
                                    <span className="code-attribute">
                                        span=
                                    </span>
                                    <span className="code-value">
                                        "8of8"
                                    </span>
                                    <span className="code-element">
                                        /&gt;
                                    </span>
                                </div>
                                <span className="code-element">
                                    &lt;/Row&gt;
                                </span>
                            </code>
                        </div>
                    </div>
                    <h2 className="page-sub-header">8 Columns</h2>
                    <div className="example">
                        <Row>
                            <Col span="1of8">
                                <p className="highlight">
                                    Span 1 of 8
                                </p>
                            </Col>
                            <Col span="1of8">
                                <p className="highlight">
                                    Span 1 of 8
                                </p>
                            </Col>
                            <Col span="1of8">
                                <p className="highlight">
                                    Span 1 of 8
                                </p>
                            </Col>
                            <Col span="1of8">
                                <p className="highlight">
                                    Span 1 of 8
                                </p>
                            </Col>
                            <Col span="1of8">
                                <p className="highlight">
                                    Span 1 of 8
                                </p>
                            </Col>
                            <Col span="1of8">
                                <p className="highlight">
                                    Span 1 of 8
                                </p>
                            </Col>
                            <Col span="1of8">
                                <p className="highlight">
                                    Column 7
                                </p>
                            </Col>
                            <Col span="1of8">
                                <p className="highlight">
                                    Span 1 of 8
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="2of8">
                                <p className="highlight">
                                    Span 2 of 8
                                </p>
                            </Col>
                            <Col span="2of8">
                                <p className="highlight">
                                    Span 2 of 8
                                </p>
                            </Col>
                            <Col span="2of8">
                                <p className="highlight">
                                    Span 2 of 8
                                </p>
                            </Col>
                            <Col span="2of8">
                                <p className="highlight">
                                    Span 2 of 8
                                </p>
                            </Col>
                            <Col span="2of8">
                                <p className="highlight">
                                    Span 2 of 8
                                </p>
                            </Col>
                            <Col span="2of8">
                                <p className="highlight">
                                    Span 2 of 8
                                </p>
                            </Col>
                            <Col span="2of8">
                                <p className="highlight">
                                    Span 2 of 8
                                </p>
                            </Col>
                            <Col span="2of8">
                                <p className="highlight">
                                    Span 2 of 8
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="3of8">
                                <p className="highlight">
                                    Span 3 of 8
                                </p>
                            </Col>
                            <Col span="5of8">
                                <p className="highlight">
                                    Span 5 of 8
                                </p>
                            </Col>
                            <Col span="4of8">
                                <p className="highlight">
                                   Span 4 of 8
                                </p>
                            </Col>
                            <Col span="4of8">
                                <p className="highlight">
                                   Span 4 of 8
                                </p>
                            </Col>
                            <Col span="1of8">
                                <p className="highlight">
                                   Span 1 of 8
                                </p>
                            </Col>
                            <Col span="7of8">
                                <p className="highlight">
                                    Span 7 of 8
                                </p>
                            </Col>
                            <Col span="2of8">
                                <p className="highlight">
                                   Span 2 of 8
                                </p>
                            </Col>
                            <Col span="6of8">
                                <p className="highlight">
                                    Span 6 of 8
                                </p>
                            </Col>
                        </Row>
                    </div>
                </div>
            </DocumentTitle>
        );
    }
}

export default Grid;