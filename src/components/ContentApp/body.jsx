import { formatDate } from "../../helper/data";

function Body({ title, createdAt, body }) {
  return (
    <div>
      <h3>{title}</h3>
      <p className="note__format-date">{formatDate(createdAt)}</p>
      <p>{body}</p>
    </div>
  );
}

export default Body;
