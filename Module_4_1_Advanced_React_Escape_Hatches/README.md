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

## 4.10 - Synchronizing with Effects - Fetching Data:

- To prevent setState twice in development we have to operate like this:

```
 useEffect(() => {
    let ignore = false;

    // fetch comment here
    async function startFetching() {
      const json = await api(userId);
      if (!ignore) {
        setComments(json);
      }
    }
    startFetching();
    return () => {
      ignore = true;
    };
  }, [userId]);
```

## 4.12 - You Might Not Need an Effect - Initial three examples:

- 
