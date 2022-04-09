import s from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/actions';
import PropTypes from 'prop-types';

export default function ContactItem({ name, id, number }) {
  const dispatch = useDispatch();

  return (
    <>
      <li key={id}>
        {name} : {number}
        <button
          className={s.buttonList}
          type="button"
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </button>
      </li>
    </>
  );
}
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
