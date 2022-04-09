import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = () => {
  const searchContact = useSelector(state => state.contacts.filter);
  const { items } = useSelector(state => state.contacts);

  const getVisibleContacts = () => {
    return items.filter(contact =>
      contact.name.toLowerCase().includes(searchContact)
    );
  };

  return (
    <ul>
      {getVisibleContacts().length !== 0 &&
        getVisibleContacts().map(({ name, id, number }) => (
          <ContactItem key={id} name={name} id={id} number={number} />
        ))}
    </ul>
  );
};

export default ContactList;
