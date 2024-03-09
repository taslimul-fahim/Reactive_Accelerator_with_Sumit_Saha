import { useRef } from "react";

const ExOne = () => {
  const myRef = useRef(null);
  const inputRef = useRef(null);

  const handleClick = () => {
    myRef.current.scrollIntoView();
  };

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleFocus}>Focus The Input</button>

      {/* --------------------------- */}
      <div ref={myRef}>Hello</div>
      <button onClick={handleClick}>Scroll in to Hello</button>
    </div>
  );
};

export default ExOne;
