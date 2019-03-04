import React from 'react';
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
    // this.attachQuillRefs = this.attachQuillRefs.bind(this);

    this.state = {
      title: this.props.note.title,
      body: this.bodyToObject()
    };

    // this.quillRef = null;
    // this.reactQuillRef = null;
  }

  createNoteObject(noteId) {
    return {
      id: noteId,
      title: this.state.title,
      body: this.bodyToText(),
    };
  }

  handleChange(content, delta, source, editor) {
    this.setState({ body: editor.getContents() });
  }

  componentDidUpdate(prevProps) {
    let previousNoteId = prevProps.match.params.noteId;
    let currentNoteId = this.props.match.params.noteId;
    
    if (currentNoteId !== previousNoteId) {
      if (this.bodyToText() !== prevProps.note.body) {
        prevProps.updateNote(this.createNoteObject(previousNoteId));
      }
      this.setState({ 
        title: this.props.note.title,
        body: this.bodyToObject()
      });
    }
  }

  componentWillUnmount() {
    if (this.bodyToText() !== this.props.note.body) {
      this.props.updateNote(this.createNoteObject(this.props.match.params.noteId));
    }
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
        <form className="note-title-input">
          <input type="text"
                 onChange={(e) => this.setState({ title: e.target.value })}
                 value={this.state.title}
                 placeholder="Title your note"
                />
        </form>
        
        <div id="editor">
          <QuillEditor value={this.state.body}
                       onChange={this.handleChange}
                       defaultValue={this.bodyToObject()}
                       placeholder={this.props.placeholder} >
          </QuillEditor>
        </div>
      </section>
    )
  }
}

// const NotesDetail = props => {
  
//   const bodyToObject = () => {
//     return JSON.parse(props.note.body);
//   };

//   const bodyToText = () => {
//     return JSON.stringify(body);
//   };

//   const initializeBody = () => {
//     debugger;
//     const body = bodyToObject();
//     quill.setContents(body);
//     setBody(body);
//   };

//   const coupleBodyUpdates = () => {
//     const currentBody = quill.getContents().ops;
//     setBody(currentBody);
//   };

//   const [body, setBody] = useState({});
//   const [title, setTitle] = useState(props.note.title);

//   let quill;
//   useEffect(() => {
//     quill = new Quill('#editor', {
//       theme: 'snow'
//     });
//     initializeBody();
//     quill.on('text-change', function (delta, oldDelta, source) {
//       setBody(quill.getContents().ops);
//     });

//     return () => {
//       debugger;
//       props.updateNote(bodyToText());
//     };
//   }, []);

//   return (
//     <section className="note-detail">
//       <div id="editor">
//       </div>
//     </section>
//   )
// };

export default NotesDetail;