import s from './Filter.module.css';
import { setFilter } from 'redux/actions';
import { useDispatch } from 'react-redux';

export default function Filter() {
  const dispatch = useDispatch();
  const onChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <label>
      Find contacts by name
      <input className={s.input} type="text" onChange={onChange} />
    </label>
  );
}
