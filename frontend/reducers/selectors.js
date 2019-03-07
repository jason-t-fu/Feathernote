
export const selectAllNotebooks = state => {
  return Object.values(state.entities.notebooks);
};

export const selectAllNotes = state => {
  return Object.values(state.entities.notes);
};

export const filterAndSortNotesInNotebook = (state, notebookId) => {
  return selectAllNotes(state).filter(note => {
    return note.notebookId === notebookId;
  }).sort(
    (a, b) => (Date.parse(b.updatedAt) - Date.parse(a.updatedAt))
  );
};

export const sortAllNotes = state => {
  return selectAllNotes(state).sort(
    (a, b) => (Date.parse(b.updatedAt) - Date.parse(a.updatedAt))
  );
};

export const selectAllSessionErrors = state => {
  return Object.values(state.errors.session);
}

// export const selectNotebooksNotes = (state, notebook) => {
//   return notebook ? notebook.notes.map(id => state.entities.notes[id]) : [];
// };