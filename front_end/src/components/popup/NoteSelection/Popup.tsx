import { useRef } from "react";
import CreateButton from "./CreateButton";
import Container from "./Container";

const notegroup = [
  { type: "Note 1", color: "#f0f0f0" }, // Light gray
  { type: "Note 2", color: "#c0c0c0" }, // Silver
  { type: "Note 3", color: "#ffe4b5" }, // Moccasin
  { type: "Note 4", color: "#f5f5dc" }, // Beige
  { type: "Note 5", color: "#f0e68c" }, // Khaki
];

function Popup() {
  const PopupRef = useRef(null);
  return (
    <Container popupRef={PopupRef}>
      <CreateButton popupRef={PopupRef} notegroup={notegroup} />
    </Container>
  );
}

export default Popup;
