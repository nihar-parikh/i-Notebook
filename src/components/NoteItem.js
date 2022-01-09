import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

const NoteItem = (props) => {
  //console.log(props);
  const { note, updateNote } = props;
  const context = useContext(NoteContext);
  //console.log(context);
  const { editNote, deleteNote } = context;
  //console.log("notes", notes);

  const handleEditNote = () => {
    //editNote(note._id, note.title, note.description, note.tag);
    updateNote(note);
  };

  const handleDeleteNote = () => {
    deleteNote(note._id);
  };

  return (
    <>
      {/* <div className="col md-3"> */}
      <div className="col-md-3">
        <div className="card my-3">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <h5 className="card-title">{note.title}</h5>
              <p className="card-text">{note.description}</p>
              <p className="card-text">{note.tag}</p>

              <EditIcon onClick={handleEditNote} />
              <DeleteIcon onClick={handleDeleteNote} />
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default NoteItem;
