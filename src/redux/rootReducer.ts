import { combineReducers } from '@reduxjs/toolkit';

import contactsReducer from './reducers/contactsReducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

export default rootReducer;
