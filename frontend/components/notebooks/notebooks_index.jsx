import React from 'react';
import NotebooksIndexItemContainer from './notebooks_index_item_container';
import Modal from '../modal/modal';

const NotebookIndex = props => {

  return (
    <aside className="notebooks-index">
      <div className="notebooks-index-header">
        <h3 className="notebooks-title">Notebooks</h3>
        <i className="fas fa-book-medical"></i>
      </div>

      <ul className="notebooks-index-items">
        {props.notebooks.map(notebook => {
          return <NotebooksIndexItemContainer key={notebook.id}
                    notebook={notebook}
                    />
        })}
      </ul>
    </aside>
  )
}

export default NotebookIndex;