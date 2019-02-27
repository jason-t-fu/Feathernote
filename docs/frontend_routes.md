# Frontend Routes

The components are organized as follows:

* `Root`
  * `App`
    * `Header`
    * `{ Main Component }`
    * `Footer`

The following routes are part of the `Main Component` and are rendered between the `Header` and the `Footer`.

* `/`
  * `Splash`
* `/login`
  * `SessionForm`
* `/signup`
  * `SessionForm`
* `/notes`
  * `NotesIndex`
    * `NotesIndexItem`
  * `NoteShow`
* `/notebooks`
  * `NotebooksIndex`
    * `NotebooksIndexItem`
* `/notebooks/:notebookId`
  * `NotebookShow`
    * `NotesIndex`
      * `NotesIndexItem`
    * `NoteShow`
* `/tags`
  * `TagsIndex`
    * `TagsIndexItem`
* `/tags/:tagId`
  * `TagShow`
    * `NotesIndex`
      * `NotesIndexItem`
    * `NoteShow`
