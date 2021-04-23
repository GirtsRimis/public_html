import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Button, Form} from 'react-bootstrap';
import {addNotes} from './NotesActions';

class AddNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ""
        };
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    onAddClick = () => {
        const note = {
            content: this.state.content
        };
        this.props.addNotes(note);
    };

    render() {
        return (
            <div>
                <h2>Add new note</h2>
                <Form>
                    <Form.Group controlId="contentId">
                        <Form.Label>Note</Form.Label>
                        <Form.Control 
                            as="textarea"
                            rows={3}
                            name="content"
                            placeholder="Enter note"
                            value={this.state.content}
                            onChange={this.onChange}
                        />
                    </Form.Group>
                </Form>
                <Button variant="success" onClick={this.onAddClick}>
                    Add note
                </Button>
            </div>
        )
    }
}

AddNote.propTypes = {
    addNotes: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {addNotes})(withRouter(AddNote));
