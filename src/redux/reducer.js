import { createReducer } from '@reduxjs/toolkit';
import { setContact, addContact, setFilter, deleteContact } from './actions';

export const initialState = {
  contacts: {
    items: [],
    filter: '',
  },
};

export const reducer = createReducer(initialState, {
  [setContact]: (state, action) => {
    state.contacts = action.payload;
  },
  [addContact]: (state, action) => {
    state.contacts.items.push(action.payload);
  },
  [deleteContact]: (state, action) => {
    state.contacts.items = state.contacts.items.filter(
      contact => contact.id !== action.payload
    );
  },
  [setFilter]: (state, action) => {
    state.contacts.filter = action.payload.toLowerCase().trim();
  },
});
