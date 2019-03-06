import { combineReducers } from 'redux';
import sessionReducer from './session/session_reducer';
import entitiesReducer from './entities/entities_reducer';
import errorsReducer from './errors/errors_reducer';
import uiReducer from './ui/ui_reducer';
import activeReducer from './active/active_reducer';

export default combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  ui: uiReducer,
  active: activeReducer
});

/*
  State Slice:
  {
    session: { currentUserId: #/null }
    entities: {...}
    errors: {...}
    ui: {...}
  }
*/