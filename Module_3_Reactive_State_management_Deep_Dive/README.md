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