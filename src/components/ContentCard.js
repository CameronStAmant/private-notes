import './ContentCard.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { add, remove } from '../features/counter/selectSlice';

function ContentCard(props) {
  const dispatch = useDispatch();

  const createMarkup = () => {
    return { __html: props.note.body };
  };

  const checkboxToggle = (e) => {
    if (e.target.checked) {
      dispatch(add(props.note._id));
    } else {
      dispatch(remove(props.note._id));
    }
  };

  return (
    <li className="contentCard">
      <input type="checkbox" onClick={checkboxToggle} />
      <Link to={`/notebook/${props.note._id}`}>
        <div>{props.note.title}</div>
      </Link>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </li>
  );
}

export default ContentCard;
