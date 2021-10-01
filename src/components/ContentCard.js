import './ContentCard.css';

function ContentCard(props) {
  const createMarkup = () => {
    return { __html: props.note.body };
  };

  return (
    <li className="contentCard">
      <div>{props.note.title}</div>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </li>
  );
}

export default ContentCard;
