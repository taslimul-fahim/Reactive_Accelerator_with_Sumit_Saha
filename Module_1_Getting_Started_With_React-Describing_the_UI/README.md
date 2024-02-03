# 1 - Getting Started With React Describing the UI

## 1.4 - Basics Of React Component:

- Component is Ui building blocks.
- HTML elements (li, article, h1) static & basic; React components functional & dynamic.
- When you have an ui/design Plan component structure and architecture before coding, using paper or tools like Notion.
- React components are regular JS function, but it's name starts with capital letter or it won't work.
- JSX - Javascript xml.
- components name starts with capital because React can differentiate HTML tag easily.
- Never define a component inside another component.

## 1.5 - Importing and Exporting Components:

- A file can only have one default export, but it can have numerous named exports!
- Two types of export & import: Default, Named.
- If you want import a file by rename it u have to use like this `{Card as Image}` now it can use name of Image. It's called **IMPORT ALIAS**.

## 1.6 - Basic of JSX:

- JSX is a syntax extension for JS that lets you write HTML-like markup inside a JS file.
- `<> </>` it's called **Fragment**. Which let you group/wrap things without leaving any trace in the browser HTML tree.
- JSX rule is: 1. It has to be in one root element ike `<></> / <div></div>`. 2. Every JSX tag must have to close.

## 1.8 - Understanding Props - Passing Props to a Component:

- If you see two curly braces than one is for dynamic data passing and another is an object.
- If you want to avoid error which is happening because of miss passing data to **Props** from **Parent** than you can assign default value of **Props** like this `const Avatar = ({ person, size = 0 }) => {}`
- If passing props gets very repetitive than use spread syntax like bellow:

```
function Profile(props) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
}
```

- instead of destructuring all props names in parentheses like this:

```
function Profile({ person, size, isSepia, thickBorder }) {}
```

- <--**Props is immutable means: Props are considered immutable in React, meaning they cannot be changed directly. When user interaction requires a change, the child component requests the modification from its parent component, which sends a new object. The old object, being immutable, remains unchanged and is eventually removed by the JavaScript engine's garbage collection process.**-->

## 1.9 - Conditional Rendering:

- DRY - Don't repeat Yourself.
- **&&** - If left side truthy than right side will return, otherwise left side will return.
- **??** - NULLISH COALESCING OPERATOR: If left side is Nullish (Null or Undefined) than right side will return.
- **||** - If left side is falsy(Null, Undefined, false, "", NaN, 0) than right side will return.

## 1.13 - **Project** -> Tic-Tac-Toe Game:

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
