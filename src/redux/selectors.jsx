import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => {
  console.log(state);
  return state.contacts;
};

export const getValueFilter = state => {
  return state.filter;
};

export const getFilteredContacts = createSelector(
  [getContacts, getValueFilter],
  (contacts, filterValue) => {
    const normalizedFilter = filterValue.toLowerCase();
    return contacts.filter(({name}) => name.toLowerCase().includes(normalizedFilter));
  }
);
