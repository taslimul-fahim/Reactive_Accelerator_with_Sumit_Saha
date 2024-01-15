# Rendering Lists

## Notes:
- Arrow functions implicitly return the expression right after =>, so you didn’t need a return statement: 
```
const listItems = chemists.map(person =>
  <li>...</li> // Implicit return!
)
```
- But if you wrap it in curly braces than you have to return explicitly:
```
const listItems = chemists.map(person => { // Curly brace
  return <li>...</li>;
});
```

