# Advanced React: Escape Hatches

## 4.1_Referencing Values with Refs:

- Ref doesn't rerender in every execution but state does.

- State forces re-renders on update, while refs silently store info between them.

## 4.8_Synchronizing with Effects - How to write an Effect:

- Effects run after every render.

- To prevent re-render by every keystroke you can add second parameter which is array like bellow :

```
useEffect(()=>{
   // Code base
}, [])
```

- now it will run only one time but if you want to run useEffect by dependency then put your dependency in your second params like bellow :

````
useEffect(()=>{
    // code base
}, [isPlaying(which is coming as a props)])```
````

## 4.9 Synchronizing with Effects - Handling effects firing twice in development:

- 
