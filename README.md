# asFor
## is all you ever need

`asFor` is the one function you've been looking for to iterate over collections, map, filter, map and filter.
Check out these amazing examples

**note**: pairs well with [asIf](https://github.com/ericandre615/as-if)

### Examples
```
const arr = ['one', 'two', 'three', 'four', 'five'];

const mapped = asFor(arr, item => `${item}-mapped`);
// ['one-mapped', 'two-mapped', 'three-mapped', 'four-mapped', 'five-mapped']

const filtered = asFor(arr, item => item == 'three' ? item : undefined);
// ['three']

const mappedAndFiltered = asFor(
	arr,
	item => item == 'two' || item == 'four'
		? `${item}-mapped-filtered`
		: undefined
// ['two-mapped-filtered', 'three-mapped-filtered']
```



