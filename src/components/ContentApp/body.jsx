import { formatDate } from "../../helper/data";

function Body({ title, createdAt, body }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{formatDate(createdAt)}</p>
      <p>{body}</p>
    </div>
  );
}

export default Body;
