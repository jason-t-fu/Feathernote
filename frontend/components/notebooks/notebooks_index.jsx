import React from 'react';

const NotebookIndex = () => {

  return (
    <aside className="notebooks-index-wrapper">
      <div className="notebooks-index-header">
        <span>Notebooks</span>

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