import React from 'react';
import NotesCreateContainer from './notes_create_container';
import NotesDetailContainer from './notes_detail_container';
import { connect } from 'react-redux';

const ActiveNote = ({ activeNoteId, loading }) => {
  if (loading) return null;
  let noteComponent;
  if (activeNoteId) {
    noteComponent = <NotesDetailContainer />;
  }
  else {
    noteComponent = <NotesCreateContainer />;
  }

  return (
    noteComponent
  );
};

const mapStateToProps = state => {
  return {
    activeNoteId: state.active.activeNoteId,
    loading: state.ui.loading
  };
};

export default connect(mapStateToProps, null)(ActiveNote);