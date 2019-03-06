
export const selectNotebooksNotes = (state, notebook) => {
  return notebook ? notebook.notes.map(id => state.entities.notes[id]) : [];
};