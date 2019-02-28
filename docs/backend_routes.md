# Backend Routes

## HTML Routes
* `GET /` `StaticPagesController#root`

## API Endpoints

### `users`
* `GET /api/users` - returns the user information
* `POST /api/users` - sign up

### `session`
* `POST /api/session` - log in
* `DELETE /api/session` - log out

### `notes`
* `GET /api/notes` - Show all the notes that belong to the logged-in user
* `POST /api/notes` - Create a new note
* `GET /api/notes/:noteId` - Show the details of the selected note
* `PATCH /api/notes/:noteId` - Edit the selected note
* `DELETE /api/notes/:noteId` - Delete the selected note

### `notebooks`
* `GET /api/notebooks` - Show all the notes that belong to the logged-in user
* `POST /api/notebooks` - Create a new notebook
* `GET /api/notebooks/:noteId` - Show the details of the selected notebook
* `PATCH /api/notebooks/:noteId` - Edit the selected notebook
* `DELETE /api/notebooks/:noteId` - Delete the selected notebook and notes belonging to the notebook

### `tags`
* `GET /api/tags` - Shows all tags that belong to the logged-in user
* `POST /api/tags` - Create a new tag
* `GET /api/tags/:tagId` - Shows all notes and notebooks associated with the selected tag
* `PATCH /api/tags/:tagId` - Edit properties of the selected tag
* `DELETE /api/tags/:tagId` - Delete selected tag and remove associations with notes and notebooks