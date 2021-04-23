import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Button, Col, Container, Form, FormControl, Row} from 'react-bootstrap';

import {signupNewUser} from './SignupActions';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            password_confirmation: ""
        };
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSignupClick = () => {
        const userData = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation
        };
        this.props.signupNewUser(userData);
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col md="4">
                        <h1>Reģistrēties</h1>
                        <Form>
                            <Form.Group controlId="nameId">
                                <Form.Label>Lietotāj vārds</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    placeholder="Ievadi lietotāj vārdu"
                                    value={this.state.name}
                                    onChange={this.onChange}
                                />
                                <FormControl.Feedback type="invalid"></FormControl.Feedback>
                            </Form.Group>

                            <Form.Group controlId="emailId">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Ievadi savu e-pastu"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                />
                                <FormControl.Feedback type="invalid"></FormControl.Feedback>
                            </Form.Group>

                            <Form.Group controlId="passwordId">
                                <Form.Label>Parole</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    placeholder="Ievadi paroli"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                                <FormControl.Feedback type="invalid"></FormControl.Feedback>
                            </Form.Group>

                            <Form.Group controlId="password_confirmationId">
                                <Form.Label>Apstiprināt paroli</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password_confirmation"
                                    placeholder="Ievadi paroli atkārtoti"
                                    value={this.state.password_confirmation}
                                    onChange={this.onChange}
                                />
                                <FormControl.Feedback type="invalid"></FormControl.Feedback>
                            </Form.Group>
                        </Form>
                        <Button color="primary" onClick={this.onSignupClick}>
                            Reģistrēties
                        </Button>
                        <p className="mt-2">
                            Vai jau esi reģistrējies? <Link to="/login">Pieslēgties</Link>
                        </p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

Signup.propTypes = {
    signupNewUser: PropTypes.func.isRequired,
    createUser: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    createUser: state.createUser
});

export default connect(mapStateToProps, {signupNewUser})(withRouter(Signup));
