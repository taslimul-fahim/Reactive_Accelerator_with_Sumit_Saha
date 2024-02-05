// export default function App() {
//   const counter = <Counter />;
//   return (
//     <div>
//       {counter}
//       {counter}
//     </div>
//   );
// }

import Counter from "./Counter";
import { useState } from "react";

export default function App() {
  const [showB, setShowB] = useState(true);
  return (
    <div>
      <Counter />
      {showB && <Counter />}
      <label>
        <input
          type="checkbox"
          checked={showB}
          onChange={(e) => {
            setShowB(e.target.checked);
          }}
        />
        Render the second counter
      </label>
    </div>
  );
}
