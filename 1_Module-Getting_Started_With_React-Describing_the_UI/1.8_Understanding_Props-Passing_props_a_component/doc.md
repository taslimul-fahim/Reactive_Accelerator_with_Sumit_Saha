# Understanding Props - Passing Props to a Component:

## Notes: 
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
- Props is immutable means: Props are considered immutable in React, meaning they cannot be changed directly. When user interaction requires a change, the child component requests the modification from its parent component, which sends a new object. The old object, being immutable, remains unchanged and is eventually removed by the JavaScript engine's garbage collection process.
