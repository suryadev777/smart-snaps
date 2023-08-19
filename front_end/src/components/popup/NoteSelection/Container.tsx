import { useEffect } from "react";

function Container(props: { popupRef; children }) {
  const popupRef = props.popupRef;

  const handleMouseEvent = () => {
    // console.log("handleMouseEvent");
    const selection = window.getSelection()!;

    if (selection?.toString() !== "") {
      // console.log("if");
      const range = document.createRange();
      range.setStart(selection.focusNode!, selection.focusOffset!);

      const rect = range.getBoundingClientRect();

      popupRef.current.style.visibility = "visible";
      popupRef.current.style.top = Math.max(0, rect.top - 30) + "px"; // to prevent popup exit the window
      popupRef.current.style.left = Math.max(0, rect.left) + "px";
    } else {
      // console.log("else");
      popupRef.current.style.visibility = "hidden";
    }
  };

  useEffect(() => {
    // console.log("mounted")

    document.addEventListener("mouseup", handleMouseEvent);

    return () => {
      // console.log("unmounted")
      document.removeEventListener("mouseup", handleMouseEvent);
    };
  });

  return (
    <>
      <div
        role="tooltip"
        ref={popupRef}
        style={{
          position: "absolute",
          display: "inline-flex",
          visibility: "hidden",
          zIndex: 1,
        }}
      >
        {props.children}
      </div>
    </>
  );
}

export default Container;
