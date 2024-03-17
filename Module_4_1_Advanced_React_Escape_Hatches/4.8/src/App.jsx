import { useState } from "react";
import ChatRoom from "./components/ChatRoom";

const App = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      {show && <ChatRoom />}
    </div>
  );
};

export default App;
