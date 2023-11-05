import Body from "./body";
import ButtonComponent from "../ButtonComponent";

function NoteItem({
  title,
  body,
  createdAt,
  id,
  archived,
  onDelete,
  onArchive,
}) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <Body title={title} body={body} createdAt={createdAt} />
      </div>
      <div>
        <ButtonComponent
          title={"Hapus"}
          className={"note-item__delete-button"}
          id={id}
          onClicked={onDelete}
        />
        <ButtonComponent
          title={archived ? "Pindahkan" : "Arsipkan"}
          className={"note-item__archive-button"}
          id={id}
          onClicked={onArchive}
        />
      </div>
    </div>
  );
}

export default NoteItem;
