function ButtonComponent({ id, onClicked, title, className }) {
  return (
    <button className={className} onClick={() => onClicked(id)}>
      {title}
    </button>
  );
}

export default ButtonComponent;
