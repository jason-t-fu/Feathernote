import React from 'react';
import ReactQuill from 'react-quill';

const toolbar = [
  [{ 'font': [] }],                                 // dropdown with defaults from theme
  [{ 'color': [] }, { 'background': [] }],

  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],

  [{ 'list': 'ordered' }, { 'list': 'bullet' }],
  [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'align': [] }],

  ['clean']                                         // remove formatting button
];

const modules = {
  toolbar
};

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

    this.createNote = this.createNote.bind(this);
    this.bodyToObject = this.bodyToObject.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.bodyToText = this.bodyToText.bind(this);
    this.attachQuillRefs = this.attachQuillRefs.bind(this);

    this.state = {
      title: this.props.note.title,
      body: this.bodyToObject()
    };

    this.quillRef = null;
    this.reactQuillRef = null;
  }

  createNote(noteId) {
    return {
      id: noteId,
      title: this.state.title,
      body: this.bodyToText(),
    };
  }

  handleChange(content, delta, source, editor) {
    this.setState({ body: editor.getContents() });
  }
    
  componentDidMount() {
    console.log('mounted');
    this.attachQuillRefs();
  }

  componentDidUpdate(prevProps) {
    console.log('updated');
    let previousNoteId = prevProps.match.params.noteId;
    let currentNoteId = this.props.match.params.noteId;
    if (currentNoteId !== previousNoteId) {
      if (this.bodyToText() !== prevProps.note.body) {
        prevProps.updateNote(this.createNote(previousNoteId));
      }
      this.setState({ 
        title: this.props.note.title,
        body: this.bodyToObject()
      });
    }
    this.attachQuillRefs();
  }

  componentWillUnmount() {
    if (this.bodyToText() !== this.props.note.body) {
      this.props.updateNote(this.createNote(this.props.match.params.noteId));
    }
  }

  bodyToObject() {
    return JSON.parse(this.props.note.body);
  }

  bodyToText() {
    return JSON.stringify(this.state.body);
  }

  attachQuillRefs(){
    if (typeof this.reactQuillRef.getEditor !== 'function') return;
    this.quillRef = this.reactQuillRef.getEditor();
  }

  render() {
    return (
      <section className="note-detail">
        <form className="note-title-input">
          <input type="text"
                 onChange={(e) => this.setState({ title: e.target.value })}
                 value={this.state.title} 
                />
        </form>
        <div></div>
        <div id="editor">
          <ReactQuill id="quill-editor"
                      ref={el => this.reactQuillRef = el}
                      value={this.state.body}
                      modules={modules}
                      onChange={this.handleChange}
                      defaultValue={this.bodyToObject()}
                    >
          </ReactQuill>
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