import React, { useState } from "react";
import NoteContext from "./NoteContext";


const NoteState = (props) => {
  const host = "http://localhost:8000";

  const initialNotes = [
    // {
    //   _id: "61822fd03a8bef9dba6d52bd",
    //   user: "61814265c970428ae774f6a6",
    //   title: "krishna mantra",
    //   description: "hare krishna hare ram",
    //   tag: "hare krishna",
    //   date: 1635921872196,
    //   __v: 0,
    // },
    // {
    //   _id: "618230d6242c60cfb443d556",
    //   user: "61814265c970428ae774f6a6",
    //   title: "radhe shyam",
    //   description: "radhe shyam radhe shyam",
    //   tag: "radhe radhe",
    //   date: 1635922134339,
    //   __v: 0,
    // },
    // {
    //   _id: "618230d6242c60cfb443d558",
    //   user: "61814265c970428ae774f6a6",
    //   title: "radhe shyam",
    //   description: "radhe shyam radhe shyam",
    //   tag: "radhe radhe",
    //   date: 1635922134339,
    //   __v: 0,
    // },
    // {
    //   _id: "618230d6242c60cfb443d559",
    //   user: "61814265c970428ae774f6a6",
    //   title: "radhe shyam",
    //   description: "radhe shyam radhe shyam",
    //   tag: "radhe radhe",
    //   date: 1635922134339,
    //   __v: 0,
    // },
    // {
    //   _id: "618230d6242c60cfb443d551",
    //   user: "61814265c970428ae774f6a6",
    //   title: "radhe shyam",
    //   description: "radhe shyam radhe shyam",
    //   tag: "radhe radhe",
    //   date: 1635922134339,
    //   __v: 0,
    // },
  ];
  const [notes, setNotes] = useState(initialNotes);

  //Get all notes
  const getNotes = async () => {
    const response = await fetch(`${host}/users/notes`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTg5MWMzNDBhZTE1NTY2MmEyY2Y3MWQiLCJpYXQiOjE2MzYzNzU3MTd9.Jc86XJ8eXbIhtqwc0BV985XkW20PArK6luG-BycrxZI",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  //add a note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/addnotes`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTg5MWMzNDBhZTE1NTY2MmEyY2Y3MWQiLCJpYXQiOjE2MzYzNzU3MTd9.Jc86XJ8eXbIhtqwc0BV985XkW20PArK6luG-BycrxZI",
      },
      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });
    const json = await response.json();
    console.log(json);
    setNotes(notes.concat(json));
    // const note = {
    //   _id: "618230d6242c60cfb443d553",
    //   user: "61814265c970428ae774f6a6",
    //   title: title,
    //   description: description,
    //   tag: tag,
    //   date: 1635922134339,
    //   __v: 0,
    // };
    // setNotes(notes.concat(note));
  };

  //edit a note
  const editNote = async (_id, title, description, tag) => {
    console.log(_id, title, description, tag);
    const response = await fetch(`${host}/updatenotes/${_id}`, {
      method: "PATCH", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTg5MWMzNDBhZTE1NTY2MmEyY2Y3MWQiLCJpYXQiOjE2MzYzNzU3MTd9.Jc86XJ8eXbIhtqwc0BV985XkW20PArK6luG-BycrxZI",
      },
      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });
    const json = await response.json();
    console.log("updatedNote: ", json);

    let newNotes = JSON.parse(JSON.stringify(notes)); //creating duplicate copy of array of notes
    console.log(newNotes);
    for (let i = 0; i < newNotes.length; i++) {
      const newNote = newNotes[i];
      if (newNote._id === _id) {
        newNote.title = title;
        newNote.description = description;
        newNote.tag = tag;
        console.log(newNote);
      }
    }
    setNotes(newNotes);
  };

  //delete a note
  const deleteNote = async (_id) => {
    const response = await fetch(`${host}/deletenotes/${_id}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTg5MWMzNDBhZTE1NTY2MmEyY2Y3MWQiLCJpYXQiOjE2MzYzNzU3MTd9.Jc86XJ8eXbIhtqwc0BV985XkW20PArK6luG-BycrxZI",
      },
    });
    const json = await response.json();
    console.log(json);
    //setNotes(json);
    console.log("deleting note having _id: ", _id);
    const remaingNotes = notes.filter((note) => {
      return note._id !== _id;
    });
    setNotes(remaingNotes);
  };

  // const update = () => {
  //   setTimeout(() => {
  //     setState({
  //       name: "radha",
  //       surname: "sita",
  //     });
  //     //alert("changed");
  //   }, 2000);
  // };

  return (
    <NoteContext.Provider
      value={{
        notes: notes,
        setNotes: setNotes,
        getNotes: getNotes,
        addNote: addNote,
        editNote: editNote,
        deleteNote: deleteNote,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
