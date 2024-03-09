import { useRef, useState } from "react";

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  let intervalREf = useRef(null);

  const handleStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());

    intervalREf.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };

  let secondsPassed = 0;

  if (startTime !== null && now !== null) {
    secondsPassed = (now - startTime) / 1000;
  }

  const handleStop = () => {
    clearInterval(intervalREf.current);
  };

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}
