import React, { Component } from 'react'
import IntlUtils from "./languages/Intl_Utils";
import {Card, Row, Col,Form} from "react-bootstrap";

export default class FormComponent extends Component {
    render() {
        return (
            <Card>
                <Card.Title>
                    <IntlUtils id="title"/>
                </Card.Title>
                <Card.Body>
                    <Row>
                        <Col xs="12" md="6">
                            <Form.Label>
                                <IntlUtils id="name"/>
                            </Form.Label>
                            <Form.Control type="text"/>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        )
    }
}
