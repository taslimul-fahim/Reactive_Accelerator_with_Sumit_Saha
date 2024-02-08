import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  return (
    <>
      <input onChange={(e) => setText(e.target.value)} placeholder="Add Task" />
      <button onClick={()=>onAdd(text)}>Add</button>
    </>
  );
};

export default AddTask;
