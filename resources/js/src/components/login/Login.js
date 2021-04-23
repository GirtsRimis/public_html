import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import {Button, Col, Container, Form, Row} from 'react-bootstrap';

import {login} from './LoginActions.js';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            remember_me: true
        };
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleCheckBox = e => {
        this.setState({ [e.target.name]: !e.target.checked });
    }

    onLoginClick = () => {
        const userData = {
            password: this.state.password,
            email: this.state.email,
            remember_me: this.state.remember_me
        };
        this.props.login(userData, "/dashboard");
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col md="4">
                        <h1>Pieslēgties</h1>
                        <Form>
                            <Form.Group controlId="emailId">
                                <Form.Label>Epasts</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Ievadi e-pastu"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                />
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
                            </Form.Group>

                            <Form.Group controlId="remember_me">
                                <Form.Label>Vai atcerēties?</Form.Label>
                                <Form.Control
                                    type="checkbox"
                                    name="remember_me"
                                    value={this.state.remember_me}
                                    onChange={this.handleCheckBox}
                                />
                            </Form.Group>
                        </Form>
                        <Button color="primary" onClick={this.onLoginClick}>
                            Pieslēgties
                        </Button>
                        <p className="mt-2">
                            Vai neesi reģistrējies? <Link to="/signup">Reģistrēties</Link>
                        </p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {login})(withRouter(Login));
