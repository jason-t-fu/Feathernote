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

class QuillEditor extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { value, handleChange, initialState, placeholder } = this.props;
    return (
      <ReactQuill id="quill-editor"
                  value={value}
                  modules={modules}
                  onChange={handleChange}
                  defaultValue={initialState}
                  placeholder={placeholder}
                  >
      </ReactQuill>
    )
  }
}

export default QuillEditor;