import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <Container>
                <h1>Mājas</h1>
                <p>
                    <Link to="/login">Pieslēgties</Link>
                </p>
                <p>
                    <Link to="/signup">Reģistrēties</Link>
                </p>
                <p>
                    <Link to="/dashboard">Galvenais panelis</Link>
                </p>
            </Container>
        );
    }
}

export default Home;
