import React from 'react';
import { closeModal } from '../../actions/modal_action';
import { connect } from 'react-redux';

function Modal({ modal, closeModal }) {
  if (!modal) return null;
  
  let component;
  switch (modal) {
    case 'notebooks':
      component = <NotebookIndexContainer />;
      break;
    // case 'tags':
    //   component = <TagIndexContainer />;
    //   break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
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
