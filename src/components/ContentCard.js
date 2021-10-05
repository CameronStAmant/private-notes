import './ContentCard.css';
import { Link } from 'react-router-dom';

function ContentCard(props) {
  const createMarkup = () => {
    return { __html: props.note.body };
  };

  return (
    <li className="contentCard">
      <Link to={'/notebook/' + props.note._id}>
        <div>{props.note.title}</div>
      </Link>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </li>
  );
}

export default ContentCard;
