export const fetchAllNotes = () => {
  return $.ajax({
    method: "GET",
    url: '/api/notes'
  });
};

export const fetchNote = noteId => {
  return $.ajax({
    method: "GET",
    url: `/api/notes/${noteId}`
  });
};

export const createNote = note => {
  return $.ajax({
    method: "POST",
    url: '/api/notes',
    data: { 
      note: {
        title: note.title,
        body: note.body,
        notebook_id: note.notebookId
      }
    }
  });
};

export const updateNote = note => {
  return $.ajax({
    method: "PATCH",
    url: `/api/notes/${note.id}`,
    data: {
      note: {
        title: note.title,
        body: note.body,
        notebook_id: note.notebookId
      }
    }
  });
};

export const deleteNote = noteId => {
  return $.ajax({
    method: "DELETE",
    url: `/api/notes/${noteId}`
  });
};