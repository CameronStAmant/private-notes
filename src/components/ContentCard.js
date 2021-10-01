import './ContentCard.css';

function ContentCard(props) {
  return (
    <li className="contentCard">
      <div>{props.note.title}</div>
      <div>{props.note.body}</div>
    </li>
  );
}

export default ContentCard;
