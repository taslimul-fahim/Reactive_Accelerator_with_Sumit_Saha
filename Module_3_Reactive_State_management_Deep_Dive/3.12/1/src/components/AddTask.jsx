import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");

  function handleAddText(e) {
    setText(e.target.value);
  }

  return (
    <>
      <input placeholder="Add Task" value={text} onChange={handleAddText} />
      <button
        onClick={() => {
          setText("");
          onAdd(text);
        }}
      >
        Add
      </button>
    </>
  );
};

export default AddTask;
