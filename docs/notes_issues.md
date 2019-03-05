# Notes

## Functionality

- [x] Users should be directed to the notes index after login
- [x] Notes should not be accessible if logged out
- [x] The database should be seeded with data.

### Create

- [x] The new note button should render a new note
- [x] On new note submission, the note should appear in the notes index and the user should be redirected to the notes show page
- [x] If there is no title, an error should display

### Read

- [x] Clicking on the note in the index should render the selected note
- [x] Going to a random note should redirect to the new note show page

### Update

- [x] Notes should save when leaving the specific note detail page
- [x] Updated notes should have the updates reflected in the index if possible
- [x] An empty title should not update the note

### Delete

- [x] Notes should delete when clicking on the delete icon in the index
- [x] The note index should reflect the deleted note and redirect to the next note

## Style

- [x] The site should look exactly like the actual site
- [x] All relevant elements should have `cursor: pointer` on hover
- [x] When errors are displayed, most elements should not move around the page (particularly input boxes)
- [x] Remove Redux logger and all console.log()'s from production