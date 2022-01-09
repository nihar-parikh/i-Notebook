import React from "react";
import { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../context/notes/NoteContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";

const Notes = () => {
  const context = useContext(NoteContext);
  //console.log(context);
  const [note, setNote] = useState({
    _id: "",
    updatedTitle: "",
    updatedDescription: "",
    updatedTag: "",
  });

  const { notes, setNotes, addNote, getNotes, editNote } = context;
  //console.log("notes", notes);
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
    e.preventDefault();
  };

  const handleUpdateNote = (e) => {
    e.preventDefault();
    console.log("note: ", note);
    console.log("note._id: ", note._id);
    editNote(
      note._id,
      note.updatedTitle,
      note.updatedDescription,
      note.updatedTag
    );
    refClose.current.click();
  };

  const ref = useRef(null);
  const refClose = useRef(null);

  const updateNote = (currentNote) => {
    ref.current.click();
    console.log(currentNote);
    setNote({
      _id: currentNote._id,
      updatedTitle: currentNote.title,
      updatedDescription: currentNote.description,
      updatedTag: currentNote.tag,
    });
  };

  return (
    <>
      <AddNote />
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="updatedTitle">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="updatedTitle"
                    name="updatedTitle"
                    value={note.updatedTitle}
                    aria-describedby="emailHelp"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="updatedDescription">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="updatedDescription"
                    name="updatedDescription"
                    value={note.updatedDescription}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="updatedTag">Tag</label>
                  <input
                    type="text"
                    className="form-control"
                    id="updatedTag"
                    name="updatedTag"
                    value={note.updatedTag}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleUpdateNote}
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <h1>Your Notes</h1>
        {notes.map((note) => {
          return (
            <NoteItem key={note._id} note={note} updateNote={updateNote} />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
