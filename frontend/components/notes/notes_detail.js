import React, { useState, useEffect } from 'react';
import Quill from '../../quill';


class NotesDetail extends React.Component {
  constructor(props) {
    super(props);

    this.bodyToObject = this.bodyToObject.bind(this);
    this.contentsToText = this.contentsToText.bind(this);
    this.initializeBody = this.initializeBody.bind(this);

    this.state = {
      title: this.props.note.title,
      body: this.bodyToObject()
    };
  }

  componentDidMount() {
    this.quill = new Quill('#editor', {
      theme: 'snow'
    });

    this.initializeBody();

    debugger;
    this.quill.on('text-change', () => {
      debugger;
      this.setState({body: this.quill.getContents().ops});
    });
    this.quill.on = this.quill.on.bind(this);
  }

  componentDidUpdate(prevProps) {
    debugger;
    if (this.props.match.params.noteId !== prevProps.match.params.noteId) {
      this.props.updateNote(this.contentsToText());
    }
  }

  bodyToObject() {
    return JSON.parse(this.props.note.body);
  }

  contentsToText() {
    return JSON.stringify(this.state.body);
  }

  initializeBody() {
    const body = this.bodyToObject();
    this.quill.setContents(body);
  }

  render() {
    return (
      <section className="note-detail">
        <div id="editor">
        </div>
      </section>
    )
  }
}

// const NotesDetail = props => {
  
//   const bodyToObject = () => {
//     return JSON.parse(props.note.body);
//   };

//   const contentsToText = () => {
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
//       props.updateNote(contentsToText());
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