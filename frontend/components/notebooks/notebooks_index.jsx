import React, { useEffect, useState } from 'react';
import NotebooksIndexItemContainer from './notebooks_index_item_container';

const NotebookIndex = props => {
  const [search, setSearch] = useState("");

  const openCreateModal = () => {
    props.closeModal();
    props.openModal('newNotebook');
  };

  return (
    <aside className="notebooks-index">
      <div className="notebooks-index-header">
        <div className="notebooks-header-row">
          <h3 className="notebooks-title">Notebooks</h3>
          <i className="fas fa-book-medical" onClick={openCreateModal}></i>
        </div>
        <form>
          <input className="notebooks-search-bar"
                 type="text"
                 placeholder="Find a notebook"
                 value={search}
                 onChange={(e) => setSearch(e.currentTarget.value)} />
        </form>
      </div>


      <ul className="notebooks-index-items">
        {props.notebooks.filter( notebook => {
          return notebook.title.toLocaleLowerCase()
                 .startsWith(search.toLocaleLowerCase());
        }
        ).map(notebook => {
          return <NotebooksIndexItemContainer key={notebook.id}
                    notebook={notebook}
                    />;
        })}
      </ul>
    </aside>
  )
}

export default NotebookIndex;