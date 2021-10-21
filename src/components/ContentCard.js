import './ContentCard.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { add } from '../features/counter/selectSlice';

function ContentCard(props) {
  const dispatch = useDispatch();

  const createMarkup = () => {
    return { __html: props.note.body };
  };

  return (
    <li className="contentCard">
      <input type="checkbox" onClick={() => dispatch(add(props.note._id))} />
      <Link to={'/notebook/' + props.note._id}>
        <div>{props.note.title}</div>
      </Link>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </li>
  );
}

export default ContentCard;
