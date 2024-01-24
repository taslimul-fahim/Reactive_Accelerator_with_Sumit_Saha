# Updating Arrays in a State

## Notes:

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