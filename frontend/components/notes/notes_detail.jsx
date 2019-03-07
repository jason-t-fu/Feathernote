import React, { useState, useEffect } from 'react';
import QuillEditor from './quill_editor';

/*
  After the fetchAllNotes AJAX request from the Notes Index, the Notes Detail 
  component is rendered. 

  The component mounts and the quill object is instantiated and rendered. This
  only happens once, when the Index is mounted. Every switch to a different
  note is an UPDATE to the notes detail component, not an unmount/mount.

  A local state is made to keep track of the title and body of the current
  note in the Quill editor. When the params noteId changes, this triggers an
  AJAX request updateNote to save the details to the database. 
  
  Though the path has changed, the editor doesn't change until the setState
  method is invoked. This allows the current data in the editor to still be
  accessible even though the url has changed. The data will be saved with the
  updateNote AJAX request called on the previous note through prevProps,
  which is provided by the componentDidMount method. Then setState is called
  to update the local state by the new props passed in through the container.
*/

class NotesDetail extends React.Component {
  constructor(props) {
    super(props);

    this.createNoteObject = this.createNoteObject.bind(this);
    this.bodyToObject = this.bodyToObject.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.bodyToText = this.bodyToText.bind(this);
    this.noteWasModified = this.noteWasModified.bind(this);

    this.state = {
      title: this.props.note.title,
      body: this.bodyToObject(),
      notebookId: this.props.note.notebookId
    };

  }

  createNoteObject(noteId) {
    return {
      id: noteId,
      title: this.state.title,
      body: this.bodyToText(),
      notebookId: this.state.notebookId
    };
  }

  noteWasModified(note) {
    return (this.bodyToText() !== note.body || 
            this.state.notebookId !== note.notebookId);
  }

  handleChange(content, delta, source, editor) {
    this.setState({ body: editor.getContents() });
  }

  componentDidUpdate(prevProps) {
    let previousNoteId = prevProps.note.id;
    let currentNoteId = this.props.note.id;
    
    if (currentNoteId !== previousNoteId) {
      if (prevProps.note && this.noteWasModified(prevProps.note)) {
        prevProps.updateNote(this.createNoteObject(previousNoteId));
      }
      this.setState({ 
        title: this.props.note.title,
        body: this.bodyToObject(),
        notebookId: this.props.note.notebookId
      });
    }
  }

  componentWillUnmount() {
    if (this.props.note && this.noteWasModified(this.props.note)) {
      this.props.updateNote(this.createNoteObject(this.props.note.id));
    }
  }

  bodyToObject() {
    return JSON.parse(this.props.note.body);
  }

  bodyToText() {
    return JSON.stringify(this.state.body);
  }

  render() {

    if (!this.props.note) return null;

    return (
      <section className="note-detail">
        <form className="note-title-input">
          <input type="text"
                 onChange={(e) => this.setState({ title: e.currentTarget.value })}
                 value={this.state.title}
                 placeholder="Title your note"
                />
          {this.props.errors}
        </form>
        <div className="notebook-selector-container">
          <i className="fas fa-book"></i>
          <select className="notebook-selector"
                  onChange={(e) => this.setState({ notebookId: e.currentTarget.value })}
                  value={this.state.notebookId} >
            {this.props.notebooks.map(notebook => {
              return <option key={notebook.id}
                             value={notebook.id} >
                             {notebook.title}
                     </option>
            })}
          </select>
        </div>
        

        <div id="editor">
          <QuillEditor value={this.state.body}
                       handleChange={this.handleChange}
                       initialState={this.state.body} >
          </QuillEditor>
        </div>
      </section>
    )
  }
}

export default NotesDetail;