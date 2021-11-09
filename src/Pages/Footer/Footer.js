import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        // <div>
            <div className="bg-dark mt-5 text-light p-5">
               <Container>
                  <Row>
                    <Col xs>
                      <h1>Delivery</h1>
                      <p>Iwhite truffled goat cheese and vine tomatoes on our freshly baked organic wecken roll</p>
                    </Col>
                    <Col xs>
                      <h1>Food details</h1>
                      <ui>
                            <li>Burger</li>
                            <li>humBurger</li>
                            <li>Fasta</li>
                            <li>SendWich</li>
                      </ui>
                    </Col>
                    <Col xs>
                      <h1>Newsletter</h1>
                      <InputGroup className="mb-3">
                        <FormControl
                          placeholder="Your Email Address"
                          aria-label="Your Email Address"
                          aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" id="button-addon2">
                          Subscribe
                        </Button>
                      </InputGroup>
                    </Col>
                  </Row>
              </Container>
               </div> 
        // </div>
    );
};

export default Footer;