function TextFormComponent({ placeholder, maxLength, value, type, onChange }) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        value={value}
        onChange={onChange}
        size="500px"
      />
    </>
  );
}

export default TextFormComponent;
