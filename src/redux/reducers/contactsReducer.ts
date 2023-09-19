import { Contact } from 'react-native-contacts';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: {
  favorited: Contact[];
} = {
  favorited: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addOrRemoveFavorited: (
      state,
      action: PayloadAction<{ contact: Contact }>,
    ) => {
      state.favorited = state.favorited.some(
        ({ recordID }) => recordID === action.payload.contact.recordID,
      )
        ? []
        : [action.payload.contact];
    },
  },
});

// Export actions and reducer
export const { addOrRemoveFavorited } = contactsSlice.actions;
export default contactsSlice.reducer;
