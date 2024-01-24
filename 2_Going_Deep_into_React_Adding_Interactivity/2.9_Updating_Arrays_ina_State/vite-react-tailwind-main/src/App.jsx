// Adding something to an Array in React:

// import { useState } from "react";

// let nextId = 0;

// export default function List() {
//   const [name, setName] = useState("");
//   const [artists, setArtists] = useState([]);

//   return (
//     <>
//       <h1>Inspiring sculptors:</h1>
//       <input value={name} onChange={(e) => setName(e.target.value)} />
//       <button
//         onClick={() => {
//           // artists.push({
//           //   id: nextId++,
//           //   name: name,
//           // });
//           setArtists([
//             ...artists,
//             {
//               id: nextId++,
//               name: name,
//             },
//           ]);
//         }}
//       >
//         Add
//       </button>
//       <ul>
//         {artists.map((artist) => (
//           <li key={artist.id}>{artist.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// Transforming an array

// 

// Replacing items in an array

// import { useState } from 'react';

// let initialCounters = [
//   0, 0, 0
// ];

// export default function CounterList() {
//   const [counters, setCounters] = useState(
//     initialCounters
//   );

//   function handleIncrementClick(index) {
//     const nextCounters = counters.map((c, i) => {
//       if (i === index) {
//         // Increment the clicked counter
//         return c + 1;
//       } else {
//         // The rest haven't changed
//         return c;
//       }
//     });
//     setCounters(nextCounters);
//   }

//   return (
//     <ul>
//       {counters.map((counter, i) => (
//         <li key={i}>
//           {counter}
//           <button className='border ml-2 mt-2 border-gray-400' onClick={() => {
//             handleIncrementClick(i);
//           }}>+1</button>
//         </li>
//       ))}
//     </ul>
//   );
// }

// Inserting into an array

import { useState } from "react";

let nextId = 3;
const initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

export default function List() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState(initialArtists);

  function handleClick() {
    const insertAt = 1; // Could be any index
    const nextArtists = [
      // Items before the insertion point:
      ...artists.slice(0, insertAt),
      // New item:
      { id: nextId++, name: name },
      // Items after the insertion point:
      ...artists.slice(insertAt),
    ];
    setArtists(nextArtists);
    setName("");
  }

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleClick}>Insert</button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}

