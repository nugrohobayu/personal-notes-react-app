import React from "react";

function Header({ search, setQuery, notes, setFilteredNotes }) {
  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setQuery(searchTerm);

    const filteredNotes = notes.filter((note) =>
      note.title.toLowerCase().includes(searchTerm)
    );
    setFilteredNotes(filteredNotes);
  };

  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <div className="note-search">
        <input
          type="search"
          placeholder="Cari catatan..."
          value={search}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
}

export default Header;
