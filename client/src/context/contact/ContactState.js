import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initalState = {
    contacts: [
      {
        type: 'personal',
        id: 3,
        name: 'Harry White',
        email: 'harry@gmail.com',
        Phone: '333-333-333',
      },
      {
        type: 'personal',
        id: 1,
        name: 'Ted Johnson',
        email: 'ted@gmail.com',
        phone: '222-222-222',
      },
      {
        type: 'professional',
        id: 2,
        name: 'Sara Smith',
        email: 'ssmith@gmail.com',
        phone: '111-111-111',
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initalState);

  // Add Contact

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
