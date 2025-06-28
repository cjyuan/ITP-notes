## Examples (Comparing for loops to `.forEach()`, `.map()`, `.filter()`, `.reduce()`) 

### `.forEach()`

Typical use: Process the elements one by one

```javascript
let A = [5, 6, 7 , 8];

// for loop version
for (let i = 0; i < A.length; i++) {
  // process each element once (e.g., output the value of the element)
  console.log(A[i]);
}

// for-of loop version -- shorter syntax if we do no need the index
for (let el of A) {
  console.log(el); // do something to each element once
}

// .forEach() version (with index)
A.forEach((el, idx) => {
  console.log(el, idx); 
});

// .forEach() version (without index)
A.forEach((el) => {
  console.log(el);
});
```

---
### `.map()`

Create a new array by computing each element's value based on the corresponding element in the original array.

```javascript
let A = [5, 6, 7 , 8];

// e.g., doubling the value of the elements in A

let doubled = []; 
for (let i = 0; i < A.length; i++) {
  doubled[i] = 2 * A[i];
}

let doubled2 = A.map((el) => {
  return 2 * el;
});

console.log(doubled);
console.log(doubled2);
```

### `.filter()`

Create a new array using selected elements from the current array.

```javascript
let A = [5, 6, 7 , 8];

// e.g., select only even numbers

let evenNumbers = [];
for (let i = 0; i < A.length; i++) {
  if (A[i] % 2 == 0)
    evenNumbers.push(A[i])
}

let evenNumbers2 = A.filter((el) => {
  return el % 2 == 0;
});

console.log(evenNumbers);
console.log(evenNumbers2);
```

### `.reduce()`

Compute a value based on elements of an array. For examples,
- compute the sum or product of all elements
- find the largest or smallest element

```javascript
let A = [5, 6, 7 , 8];

// e.g., compute the sum of elements

let sum = 0;
for (let i = 0; i < A.length; i++) {
  sum += A[i];
}

const sum2 = A.reduce((acc, el) => {
  return acc + el;                          // Note: the returned value is passed to the next function call  
}, 0);

console.log(sum);
console.log(sum2);
```
