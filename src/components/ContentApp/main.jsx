import React from "react";
import { initialData } from "../../helper/data";
import NoteList from "./NoteList";
import Header from "./header";
import AddNote from "./AddNote";

class ContentApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: initialData(),
      archivedNotes: [],
      search: "",
      filteredNotes: [],
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.setQuery = this.setQuery.bind(this);
    this.setFilteredNotes = this.setFilteredNotes.bind(this);
  }

  onDeleteHandler(id) {
    const { notes, archivedNotes } = this.state;
    const updatedNotes = notes.filter((note) => note.id !== id);
    const updatedArchivedNotes = archivedNotes.filter((note) => note.id !== id);

    this.setState({
      notes: updatedNotes,
      archivedNotes: updatedArchivedNotes,
    });
  }

  onArchiveHandler(id) {
    const { notes, archivedNotes } = this.state;
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: !note.archived };
      }
      return note;
    });

    const noteToArchive = updatedNotes.find((note) => note.id === id);

    if (noteToArchive) {
      this.setState({
        notes: updatedNotes.filter((note) => note.id !== id),
        archivedNotes: [...archivedNotes, noteToArchive],
      });
    }
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  searchArchivedNotes = (searchTerm) => {
    const { archivedNotes } = this.state;
    const filteredArchivedNotes = archivedNotes.filter((note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filteredArchivedNotes;
  };

  setQuery(query) {
    this.setState({ search: query });
  }

  setFilteredNotes(filteredNotes) {
    this.setState({ filteredNotes });
  }

  render() {
    return (
      <>
        <div>
          <Header
            search={this.state.search}
            notes={this.state.notes}
            setQuery={this.setQuery}
            setFilteredNotes={this.setFilteredNotes}
          />
        </div>
        <div className="note__body">
          <AddNote inputNote={this.onAddNoteHandler} />
          <h2>Catatan Aktif</h2>
          <NoteList
            notes={
              this.state.filteredNotes.length > 0
                ? this.state.filteredNotes
                : this.state.notes
            }
            search={this.state.search}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
          <h2>Arsip</h2>
          <NoteList
            notes={
              this.state.search.length > 0
                ? this.searchArchivedNotes(this.state.search)
                : this.state.archivedNotes
            }
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
        </div>
      </>
    );
  }
}

export default ContentApp;
