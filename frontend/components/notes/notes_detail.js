import React, { useEffect } from 'react';
import Quill from './quill';

const NotesDetail = () => {

  let quill;
  useEffect(() => {
    quill = new Quill('#editor', {
      theme: 'snow'
    });

  }, []);

  return (
    <section class="note-detail">
      <div id="editor">
        <p>Hello World!</p>
        <p>Some initial <strong>bold</strong> text</p>
        <p><br></br></p>
      </div>
    </section>
  )
};

export default NotesDetail;