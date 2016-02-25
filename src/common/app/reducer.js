import {combineReducers} from 'redux';

// Note we are composing all reducers. Web, native, whatever. Of course we can
// pass platform specific reducers in configureStore, but there is no reason to
// do that, until app is really large.
import auth from '../auth/reducer';
import device from '../device/reducer';
import fields from '../fields/reducer';
import intl from '../intl/reducer';
import todos from '../todos/reducer';
import ui from '../ui/reducer';
import users from '../users/reducer';
import loans from '../loans/reducer';
import * as actions from '../loans/actions';

const combinedReducers = combineReducers({
  auth,
  device,
  fields,
  intl,
  todos,
  ui,
  users,
  loans
});

export default combinedReducers;

// const appReducer = function(state, action) {
//   switch (action.type) {
//     case actions.SET_SOMETHING:
//       const {what, where, value} = action.payload;
//       return {
//         ...state,
//         [what]: state[what].setIn(where, value)
//       }
//   }
//
//   return {
//     ...combinedReducers(state, action)
//   }
// }
// export default appReducer;
