let A = [5, 6, 7 , 8];

// .forEach()
// ------------------
for (let i = 0; i < A.length; i++) {
  // do something to each element once
  console.log(A[i]); // e.g., output the value of each element
}

// Shorter syntax if we do no need the index
for (let el of A) {  
  console.log(el); // do something to each element once
}

A.forEach((el) => {
  console.log(el);
});

A.forEach((el, idx) => { // We can still access the index via the 2nd parameter if needed
  console.log(el, idx); 
});


// .map()
// ------------------
let B = []
for (let i = 0; i < A.length; i++) {
  B[i] = 2 * A[i]; // compute each element in B based on element in A 
}

const B2 = A.map((el) => {
  return 2 * el;
});

// .filter()
// ------------------
let filtered = [];
for (let i = 0; i < A.length; i++) {
  if (A[i] % 2 == 0)  // a condition to determine if we want to include A[i] in new array
    filtered.push(A[i])
}

const filtered2 = A.filter((el) => {
  return el % 2 == 0;
});

// reduce
// ------------------
let sum = 0;
for (let i = 0; i < A.length; i++) {
  sum += A[i];
}

const sum2 = A.reduce((acc, el) => {
  return acc + el;
}, 0);

