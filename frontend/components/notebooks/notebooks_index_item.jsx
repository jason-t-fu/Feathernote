import React from 'react';

class NotebooksIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.notebook.title,
      edit: false
    };

    this.displayNotebook = this.displayNotebook.bind(this);
    this.submitEdit = this.submitEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.titleForm = this.titleForm.bind(this);
  }

  componentDidUpdate() {
    if (this.state.edit) {
      document.getElementById('notebook-title').focus();
    }
  }
  
  handleDelete(e) {
    e.stopPropagation();
    this.props.deleteNotebook(this.props.notebook.id).then(
      () => this.props.receiveAllNotes()
    );
  }

  handleEdit(e) {
    e.stopPropagation();
    this.setState({edit: true});
  }

  displayNotebook(e) {
    e.currentTarget.classList.add('selected')
    this.props.receiveNotebook(this.props.notebook);
    if (this.props.notes.length) {
      this.props.receiveNote(this.props.notes[0]);
    }
    else {
      this.props.makeNote();
    }
    this.props.closeModal();
  }

  submitEdit(e) {
    e.preventDefault();
    this.props.updateNotebook({
      id: this.props.notebook.id,
      title: this.state.title
    });
    this.setState({edit: false});
  }

  titleForm(e) {
    return this.state.edit ? 
    (
      <form onSubmit={this.submitEdit} 
            onClick={(e) => e.stopPropagation()
            }>
        <input id="notebook-title"
               type="text"
               value={this.state.title}
               onChange={(e) => this.setState({title: e.currentTarget.value})}
               onBlur={(e) => this.setState({edit: false})} />
        <button type="submit" style={{display: "none"}}></button>
      </form>
    ) : (
      this.state.title
    )
  }

  render() {
    return (
      <div className={`notebooks-index-item-container ${
                      this.props.activeNotebookId === this.props.notebook.id ? 
                      'selected-notebook' : ''}`}
        onClick={this.displayNotebook}>
        <div className="notebooks-index-item">
          <div className="notebooks-index-row">
            <div className="notebooks-index-item-title">{this.titleForm()}</div>
            <div className="options-buttons">
              <i className="far fa-edit" onClick={this.handleEdit}></i>
              <i className="far fa-trash-alt" onClick={this.handleDelete}></i>
            </div>
          </div>
          <div className="notebooks-index-item-count">
            {`${this.props.notes.length} notes`}
          </div>
        </div>
      </div>
    )
  };
};

export default NotebooksIndexItem;