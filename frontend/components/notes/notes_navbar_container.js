import { connect } from "react-redux";
import NotesNavbar from "./notes_navbar";
import { logout } from "../../util/session_api_util";
import { makeNote, receiveAllNotes } from "../../actions/notes_actions";
import { openModal } from "../../actions/modal_action";

const mapStateToProps = state => {
  return {
    notes: state.entities.notes,
    numNotes: Object.values(state.entities.notes).length
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    makeNote: () => dispatch(makeNote()),
    receiveAllNotes: notes => dispatch(receiveAllNotes(notes)),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesNavbar);