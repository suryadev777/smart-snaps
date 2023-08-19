import React from "react";
import ReactDOM from "react-dom/client";
import Popup from "./components/popup/NoteSelection/Popup.tsx";
import MainContainer from "./components/popup/side/MainContainer.tsx";
import Notes from "./components/popup/side/Notes.tsx";
type note = {
  id: string;
  text: string;
  type: string;
};

const notesList: Array<note> = [
  {
    id: "note123",
    text: "Remember to buy groceries after work.",
    type: "personal",
  },
  {
    id: "note456",
    text: "Prepare presentation for the meeting at 10 AM.",
    type: "work",
  },
  {
    id: "note789",
    text: "Call John to discuss travel plans.",
    type: "communication",
  },
  {
    id: "note987",
    text: "Research new programming frameworks for the project.",
    type: "development",
  },
  {
    id: "note654",
    text: "Practice guitar chords: G, C, D.",
    type: "hobby",
  },
];

const list = [
  <Notes note={notesList[0]} />,
  <Notes note={notesList[0]} />,
  <Notes note={notesList[0]} />,
];

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Popup />
    <MainContainer notesList={list} />
  </React.StrictMode>,
);
