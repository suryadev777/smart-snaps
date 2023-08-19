import React from "react";

type NoteType = {
  type: string;
  color: string;
};

function highlight(selection: Selection, color: string) {
  const range = selection.getRangeAt(0);
  const span = document.createElement("span");
  span.style.backgroundColor = color;
  range.surroundContents(span);
}
function sendData(type: string, selectedText: string) {
  const Data = {
    Type: type,
    Text: selectedText,
  };
  fetch("http://localhost:8000/upload", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function saveNote(selection: Selection, noteType: NoteType) {
  // console.log({ type: noteType.type, text: selection.toString() })
  highlight(selection, noteType.color);
  sendData(noteType.type, selection.toString());
}

interface CreateButtonProps {
  notegroup: NoteType[];
  popupRef: React.RefObject<HTMLElement>;
}

const CreateButton: React.FC<CreateButtonProps> = ({ notegroup, popupRef }) => {
  const handleButtonClick = (note: NoteType) => {
    const selection = document.getSelection();
    if (selection?.toString()) {
      saveNote(selection, note);
    }
    popupRef.current!.style.visibility = "hidden";
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "2px",
        position: "relative",
        left: "-50%",
      }}
    >
      {notegroup.map((note: NoteType, index: number) => (
        <button
          key={index}
          onClick={() => handleButtonClick(note)}
          style={{
            borderRadius: "50%",
            width: "20px",
            height: "20px",
            backgroundColor: note.color,
          }}
        ></button>
      ))}
    </div>
  );
};

export default CreateButton;
