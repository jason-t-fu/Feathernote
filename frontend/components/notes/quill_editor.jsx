import React from 'react';
import ReactQuill from 'react-quill';

const toolbar = [
  [{ 'font': [] }],                                 // dropdown with defaults from theme
  [{ 'color': [] }, { 'background': [] }],

  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons

  [{ 'list': 'ordered' }, { 'list': 'bullet' }],
  [{ 'indent': '-1' }, { 'indent': '+1' }],         // outdent/indent

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  ['link', 'image'],                                // add's image support


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
    const { value, handleChange, initialState } = this.props;
    return (
      <ReactQuill id="quill-editor"
                  value={value}
                  modules={modules}
                  onChange={handleChange}
                  defaultValue={initialState}
                  placeholder="Just start typing!"
                  >
      </ReactQuill>
    )
  }
}

export default QuillEditor;