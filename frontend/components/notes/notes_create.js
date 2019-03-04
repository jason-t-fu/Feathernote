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
      body: this.bodyToObject()
    };
  }

  createNoteObject() {
    return {
      title: this.state.title,
      body: this.bodyToText()
    };
  }

  handleChange(content, delta, source, editor) {
    this.setState({ body: editor.getContents() });
  }

  handleSubmit() {
    this.props.createNote(this.createNoteObject()).then(
      resNote => this.props.history.push(`notes/${resNote.id}`)
    );
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
        <form className="note-title-input" onSubmit={this.handleSubmit}>
          <button>Create Note</button>
          <input type="text"
                 onChange={(e) => this.setState({ title: e.target.value })}
                 value={this.state.title}
                 placeholder="Title your note"
          />
        
          <div id="editor">
            <QuillEditor value={this.state.body}
                         onChange={this.handleChange}
                         defaultValue={this.bodyToObject()}
                         placeholder={this.props.placeholder} >
            </QuillEditor>
          </div>

        </form>
      </section>
    )
  }
}

export default NotesCreate