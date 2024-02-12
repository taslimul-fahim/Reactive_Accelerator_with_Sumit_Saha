# 3- Reactive State Management Deep Dive

## 3.1 - Declarative vs Imperative UI:

- **Declarative:** Declarative programming focuses on describing what should be achieved. Examples:

1. Focus: Declarative programming focuses on expressing what should be achieved without specifying how to achieve it.
2. Abstraction: It emphasizes describing the desired result or outcome, often using high-level abstractions.
3. Readability: Code tends to be more concise, readable, and expressive.
4. Examples: SQL, HTML, CSS, and functional programming languages like Haskell are declarative.

- **Imperative:** while imperative programming emphasizes how to achieve a task through detailed step-by-step instructions. Examples:

1. Focus: Imperative programming focuses on providing explicit step-by-step instructions on how to achieve a result.
2. Control: It offers more fine-grained control over the flow of execution and mutable state.
3. Readability: Code can be more verbose, as it explicitly details the sequence of actions.
4. Examples: Languages like C, Java, and Python often involve imperative programming.

## 3.2 - Thinking about UI declaratively in React - Finding Visual States:

- **StroyBooks:** It's like a playground for React components. It helps developers build and test components in isolation, making it easier to see how they look and behave in different states or scenarios. It's a handy tool for creating and showcasing UI components during the development process.

## 3.3 - Thinking about UI declaratively in React - Finalize React states & Connect Event Handlers

- **Controlled Input:** A controlled input in React is a form element whose value is managed by React's state, allowing for precise control and dynamic updates based on application state.
- **Uncontrolled Input:** In React, an uncontrolled form input is a component where the input value is not controlled by React's state, but rather by the DOM, making it simpler but less controlled than a controlled input.

### When developing a component:

- Identify all its visual states.
- Determine the human and computer triggers for state changes.
- Model the state with useState.
- Remove non-essential state to avoid bugs and paradoxes.
- Connect the event handlers to set state.

## 3.6 - Choosing the State Structure - Avoid redundant state:

- **Derived State / Calculated state:** Derived state in React means calculating certain values based on existing state or props, instead of storing them separately. It helps keep things simple by computing values on the fly when required. example bellow:

```
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  const fullName = firstName + " " + lastName;
```

- **Don’t mirror props in state like bellow:** mirroring is ok if your props not gonna change form parent.

```
function Message({ messageColor }) {
  const [color, setColor] = useState(messageColor)}
```

- If you want to give it a shorter name, use a constant: This way it won’t get out of sync with the prop passed from the parent component. like bellow:

```
function Message({ messageColor }) {
  const color = messageColor}

```

## 3.8 - Choosing the State Structure - Avoid deeply nested state:

- **Normalization or flattening:** In programming it means organizing data in a structured and simplified way. It involves breaking down complex data structures into simpler, more manageable formats to make it easier to work with and understand.

## 3.9 - Sharing State Between Components - Lifting state up:

- It’s useful to consider components as **controlled**(driven by props) or **uncontrolled** (driven by state).

## 3.10 - Preserving and Resetting State - Default behavior:

- If you want to preserve the state between re-renders, the structure of your tree needs to “match up” from one render to another. If the structure is different, the state gets destroyed because React destroys state when it removes a component from the tree.

## 3.11 - Resetting state at the same position - Changing Default behavior:

- "To differentiate or distinguish between individual component states positioned at the same location in JSX, you can use the 'key' attribute. By assigning a unique 'key' to each component, even if they share the same position, React can identify and manage them separately. It's important to note that the 'key' attribute should not be used to enforce order; rather, it should be used to provide a unique identifier for each component. Avoid relying on the order of keys, and instead, focus on ensuring each key is unique. This approach helps React efficiently update and re-render components without relying on their order in the key attribute."

- Remember that keys are not globally unique. They only specify the position within the parent.

## 3.13 - Three steps to Consolidate state logic with a reducer:

- **Business Logic:** Business logic in a web application refers to the set of rules, processes, and calculations that define how the application operates and handles data specific to the business domain it serves. It encapsulates the functionality related to managing and processing data, enforcing business rules, and orchestrating interactions between different components of the application to achieve desired outcomes.

- **Action Dispatching:** Action dispatching is refers to the process of routing user actions, such as clicking a button or deleting an item, to the appropriate code or functionality within the application. For example, when a user clicks a "Delete" button on a webpage, the action dispatching mechanism identifies this action and triggers the corresponding delete function in the backend to remove the specified item from the database.

- **useReducer:** useReducer is a React hook used for managing complex state logic within components. It works by allowing you to define a reducer function that specifies how state updates should occur based on dispatched actions.

## 3.21 - Project - CineRental: Your One-Stop React App for Movie Magic and Rentals:

- 