import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/actions';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';

let nameId = nanoid();
let numberId = nanoid();

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.contacts);

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value.trim());
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    const newContact = e.target.elements.name.value.toLowerCase().trim();
    if (items.find(item => item.name.toLowerCase() === newContact)) {
      alert(`${newContact} is already in the contacts`);
      reset();
      return;
    }

    let id = nanoid();
    dispatch(addContact({ id: id, name: name, number: number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
    nameId = nanoid();
    numberId = nanoid();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label htmlFor={nameId} className={s.formLabel}>
        Name
        <input
          className={s.formInput}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label htmlFor={numberId} className={s.formLabel}>
        Number
        <input
          className={s.formInput}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button className={s.formButton} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
