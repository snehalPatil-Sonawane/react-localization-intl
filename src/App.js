import React, { Component } from 'react'
import { IntlProvider } from "react-intl";
import { connect } from "react-redux";
import FormComponent from "./Form";
import AppLocale from "./languages";
import IntlUtils from "./languages/Intl_Utils";
import {Card, Col, Row, Form} from "react-bootstrap";
import {changeBusinessType} from "./store/actions";

class App extends Component {

  onChange = (e) =>{
   if( e.target.value){
      this.props.changeBusinessType(e.target.value);
   }
  }
   render() {
    const currentLocale = AppLocale[this.props.currentLocale];
    return (
      <IntlProvider 
          locale={currentLocale.locale}
          messages={currentLocale.messages}>
          <Card className="body">
            <Card.Title>
              <Row>
                <Col xs="8" md="5">
                  <IntlUtils id="heading" defaultMessage="Internationalize React app"/>
                </Col>
                <Col xs="8" md="3"> 
                  <Form.Control as="select" onChange={(e) => this.onChange(e)} value={this.props.currentLocale}>
                    <option value="en_School">School</option>
                    <option value="en_College">College</option>
                  </Form.Control>
                </Col>
              </Row>
            </Card.Title>
            <Card.Body>
              <FormComponent/>
            </Card.Body>
          </Card>
      </IntlProvider>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentLocale : state.currentLocale
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeBusinessType : (value) => dispatch(changeBusinessType(value))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
