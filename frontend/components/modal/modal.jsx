import React, { useEffect } from 'react';
import { closeModal } from '../../actions/modal_action';
import { connect } from 'react-redux';
import NotebookIndexContainer from '../notebooks/notebooks_index_container';
import NotebookCreateContainer from '../notebooks/notebooks_create_container';

const Modal = ({ modal, closeModal }) => {

  useEffect(() => {
    const modalChild = document.getElementsByClassName('modal-child');
    if (modalChild.length) modalChild[0].classList.add('show');
    
    return () => {
      if (modalChild.length) modalChild[0].classList.remove('show');
    };
  });
  
  let component;
  switch (modal) {
    case 'notebooks':
      return (
        <div className="modal-background" onClick={closeModal}>
          <div className="modal-child" onClick={e => e.stopPropagation()}>
            <NotebookIndexContainer />
          </div>
        </div>
      )
    case 'newNotebook':
      return (
        <div className="modal-background-new" onClick={closeModal}>
          <div className="modal-child-new" onClick={e => e.stopPropagation()}>
            <NotebookCreateContainer />
          </div>
        </div>
      )
    // case 'tags':
    //   component = <TagIndexContainer />;
    //   break;
    default:
      return null;
  }
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
