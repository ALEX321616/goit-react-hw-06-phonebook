import s from './Filter.module.css';
import { setFilter } from 'redux/actions';
import { useDispatch, useSelector } from 'react-redux';

export default function Filter() {
  const value = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const onChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <label>
      Find contacts by name
      <input
        className={s.input}
        value={value}
        type="text"
        onChange={onChange}
      />
    </label>
  );
}
