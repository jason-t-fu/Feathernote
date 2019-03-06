import React from 'react';
import NotesCreateContainer from './notes_create_container';
import NotesDetailContainer from './notes_detail_container';
import { connect } from 'react-redux';

const ActiveNote = ({ activeNote, loading }) => {
  if (loading) return null;
  debugger;
  let noteComponent;
  if (activeNote) {
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
  debugger;
  return {
    activeNote: state.entities.activeNote,
    loading: state.ui.loading
  };
};

export default connect(mapStateToProps, null)(ActiveNote);