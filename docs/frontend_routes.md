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
* `/notebooks`
  * `NotebooksIndex`
    * `NotebooksIndexItem`
* `/notebooks/notes`
* `/notes`
  * `NotesIndex`
    * `NotesIndexItem`
* `/tags`
  * `TagsIndex`
    * `TagsIndexItem`
