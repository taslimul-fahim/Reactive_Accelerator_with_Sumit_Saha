import { useRef } from "react";

export default function Counter() {
  let ref = useRef(0);
  const handleClick = () => {
    alert(`You Clicked ${(ref.current = ref.current + 1)} time`);
  };

  return <button onClick={handleClick}>Click me!</button>;
}
