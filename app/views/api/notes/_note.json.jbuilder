json.set! note.id do
    json.id note.id
    json.title note.title
    json.body note.body
    json.notebookId note.notebook_id
    json.updatedAt note.updated_at
  end