import * as NotesApiUtil from '../util/notes_api_util';

export const RECEIVE_ALL_NOTES = "RECEIVE_ALL_NOTES";
export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
export const RECEIVE_NOTES_ERRORS = "RECEIVE_NOTES_ERRORS";
export const START_LOADING_ALL_NOTES = "START_LOADING_ALL_NOTES";

const receiveAllNotes = notes => {
  return {
    type: RECEIVE_ALL_NOTES,
    notes
  };
};

const receiveNote = note => {
  return {
    type: RECEIVE_NOTE,
    note
  };
};

// const updateNote = note => {
//   return {
//     type: UPDATE_NOTE,
//     note
//   };
// };

const removeNote = noteId => {
  return {
    type: REMOVE_NOTE,
    noteId
  };
};

const receiveErrors = errors => {
  return {
    type: RECEIVE_NOTES_ERRORS,
    errors
  };
};

const startLoadingAllNotes = () => {
  return {
    type: START_LOADING_ALL_NOTES
  };
};

export const fetchAllNotes = () => {
  return dispatch => {
    dispatch(startLoadingAllNotes());
    return NotesApiUtil.fetchAllNotes().then(
      notes => dispatch(receiveAllNotes(notes)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    );
  };
};

export const fetchNote = noteId => {
  return dispatch => {
    return NotesApiUtil.fetchNote(noteId).then(
      resNote => dispatch(receiveNote(resNote)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    );
  };
};

export const createNote = note => {
  return dispatch => {
    return NotesApiUtil.createNote(note).then(
      resNote => dispatch(receiveNote(resNote)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    );
  };
};

export const updateNote = note => {
  return dispatch => {
    return NotesApiUtil.updateNote(note).then(
      (resNote) => dispatch(receiveNote(resNote)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    );
  };
};

export const deleteNote = noteId => {
  return dispatch => {
    return NotesApiUtil.deleteNote(noteId).then(
      () => dispatch(removeNote(noteId)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    );
  };
};