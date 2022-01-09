import React, { useState, useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

const AddNote = () => {
  const context = useContext(NoteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const handleAddNote = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" }); //for making input blank after filling up the form
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
    e.preventDefault();
  };

  return (
    <div>
      <div className="my-3">
        <h1>Add a Note</h1>
        <form className="my-3">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              aria-describedby="emailHelp"
              name="title"
              value={note.title}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={note.description}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              aria-describedby="emailHelp"
              value={note.tag}
              onChange={onChange}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleAddNote}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
