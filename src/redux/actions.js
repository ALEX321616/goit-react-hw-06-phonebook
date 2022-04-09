import { createAction } from '@reduxjs/toolkit';

export const setContact = createAction('SET_CONTACT');
export const addContact = createAction('ADD_CONTACT');
export const setFilter = createAction('USE_FILTER');
export const deleteContact = createAction('DELETE_CONTACT');
