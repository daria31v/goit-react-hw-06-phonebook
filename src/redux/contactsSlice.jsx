import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

// const contactsInitialState = {
//   items: initialContacts
// }

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    addContacts (state, action) {
        const contact = { ...action.payload, id: nanoid() };
        state.push(contact);
      },
    },
    deleteContacts(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
);

export const { addContacts, deleteContacts } = contactSlice.actions;

export const contactsReducer = contactSlice.reducer;
