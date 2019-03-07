import React from 'react';
import QuillEditor from './quill_editor';

class NotesCreate extends React.Component {
  constructor(props) {
    super(props);

    this.createNoteObject = this.createNoteObject.bind(this);
    this.bodyToObject = this.bodyToObject.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.bodyToText = this.bodyToText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      title: this.props.note.title,
      body: this.bodyToObject(),
      notebookId: props.activeNotebookId || 1
    };
  }

  createNoteObject() {
    debugger;
    return {
      title: this.state.title,
      body: this.bodyToText(),
      notebookId: this.state.notebookId
    };
  }

  handleChange(content, delta, source, editor) {
    this.setState({ body: editor.getContents() });
  }

  handleSubmit() {
    this.props.createNote(this.createNoteObject());
  }

  bodyToObject() {
    return JSON.parse(this.props.note.body);
  }

  bodyToText() {
    return JSON.stringify(this.state.body);
  }

  render() {
    return (
      <section className="note-detail">
        <form className="note-create" onSubmit={this.handleSubmit}>
          <div>
            <button>Create Note</button>
            <span className="errors">{this.props.errors}</span>
          </div>
          <input type="text"
                 onChange={(e) => this.setState({ title: e.target.value })}
                 value={this.state.title}
                 placeholder="Title your note" />
        </form>
      
        <select onChange={(e) => this.setState({ notebookId: e.currentTarget.value })}
                value={this.state.notebookId} >
                {this.props.notebooks.map(notebook => {
                  return <option key={notebook.id}
                                 value={notebook.id} >
                           {notebook.title}
                         </option>
                })}
        </select>

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

export default NotesCreate