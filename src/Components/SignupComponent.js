import React from 'react';
import { Container, Form, Button, Row, Col } from "react-bootstrap"

function SignupPage() {
    return (
        <div>
            <Container fluid className=" signupBg">
                <h1 className="signinHeader my-5 py-5 mr-5 pr-5 text-light">SIGN IN</h1>
            </Container>
            <Container className="my-5 py-5">
                <Row>
                    <Col md={3}></Col>
                    <Col md={6}>
                        <Form>
                            <Form.Group className="mb-3 py-3" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Your name" size="lg" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" size="lg" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>


                            <Form.Group className="mb-3 py-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" size="lg" />
                            </Form.Group>

                            <Form.Group className="mb-3 py-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Re-enter Password" size="lg" />
                            </Form.Group>

                            <Form.Group className="mb-3 py-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="I agree to terms and conditions" />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="btn-lg btn-dark">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col md={3}></Col>
                </Row>
            </Container>
        </div>
    );
}

export default SignupPage;