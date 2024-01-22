# Tic-Tac-Toe Game:

## Project analysis:
**Game**
- -> Board:
        -> Square
- -> History: 

## Notes:
- **There are some rules when you are going to do a project:**
1. **Requirement Analysis:** When we have project requirement we will analysis it before jump into coding.
2. **Psychological hack:** Take some breaks while doing large project.
3. **Note Down:** Some concept you may not clear, some idea came in your brain, some new things you introduced for the first time or some questions arise your brain while doing project note down them without thinking.
- **And there some rules while doing project with tutorial:**
1. Type with mentor then pause and try to understand the concept.
2. **Don't Move without understanding any dot( . ).**
- **Lifting the state up Concept:** lifting state up in React refers to the practice of moving the state from a child component to a parent component. This is often done to share the state among multiple components or to manage the state at a higher level in the component hierarchy. Here is the example: 
```
// Counter.js (Child Component)
import React from 'react';

const Counter = ({ count, handleIncrement }) => {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default Counter;
jsx
Copy code
// App.js (Parent Component)
import React, { useState } from 'react';
import Counter from './Counter';

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <Counter count={count} handleIncrement={handleIncrement} />
    </div>
  );
};

export default App;
```

## Interview Q:
- 