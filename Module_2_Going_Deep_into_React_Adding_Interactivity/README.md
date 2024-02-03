# 2 - Going Deep into react Interactivity

## 2.2 - Event Propagation in JavasCript:

- 3 types of event propagation:

1. **Event Bubbling:**

- By default, events propagate from child to parent.
- `event.currentTarget & this` is same as they will show current target.

2. **Event Capturing:**
   To propagate events from parent to child, use the third parameter capture with a value of true. Example:

```
const parent = document.getElementById("parent");
const form = document.getElementById("form");
const button = document.getElementById("button");

parent.addEventListener("click", listener, capture=true);

form.addEventListener("click", listener, capture= true);

button.addEventListener("click", listener);

```

3. **Event Delegation:**

- Event delegation in JavaScript means putting a single "event listener" on a parent element to manage events for all its child elements, making the code more efficient and flexible.
- Code explained in `script.js`.
- Event delegation in JavaScript keeps working for new elements added later, whether they come dynamically or from APIs, maintaining the same event handling set up initially defined.
- <--

```
const parent = document.getElementById("parent");
const form = document.getElementById("form");
const button = document.getElementById("button");

parent.addEventListener("click", listener);

form.addEventListener("click", listener);

button.addEventListener("click", listener);
```

- **If you want to propagate clicks from the immediate parent to the button and then to the head parent, update the third event listener for your immediate parent like this:
  `form.addEventListener("click", listener, (capture = true))`** -->

## 2.3 - Understanding State: A Component's Memory

- In React, any function that starts with **`use`** is called a hook.

## 2.8 - Updating Objects in a State:

- Object shouldn't be mutet that is hold's by react state directly, instead of muting you can create new one or make a copy of existing one.

## 2.9 - Updating Arrays in a State:

- When dealing with arrays inside React State you should avoid and prefer billows list:

### Avoid:

- **Adding:** `push, unshift`
- **Removing:** `pop, shift, splice`
- **replacing:** `splice, arr[i] = ...assignment`
- **sorting:** `reverse, sort`

### Prefer to use:

- **Adding:** `concat, [...arr], spread syntex(example)`
- **Removing:** `filter, slice(example)`
- **replacing:** `map()`
- **sorting:** `copy the array first.`

## 2.10 - project Tutorial - Task Manager:

- To create create random unique id by JavasCript: `crypto.randomUUID()`
