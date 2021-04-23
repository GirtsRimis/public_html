import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getNotes} from './NotesActions';

import Note from './Note';

class NoteList extends Component {
    componentDidMount() {
        this.props.getNotes();
    }

    render() {
        const {notes} = this.props.notes;

        if (notes.lenght === 0) {
            return <h2>Please add Your first note</h2>;
        }

        let items = notes.map(note => {
            return <Note key={note.id} note={note} />;
        });

        return (
            <div>
                <h2>Notes</h2>
                {items}
                <hr />
            </div>
        );
    }
}

NoteList.propTypes = {
    getNotes: PropTypes.func.isRequired,
    notes: PropTypes.object.isRequired
};

const mapStateToProps = state => ( {
    notes: state.notes
});

export default connect(mapStateToProps, {getNotes})(withRouter(NoteList));
