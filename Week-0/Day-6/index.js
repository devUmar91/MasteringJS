// JavaScript Event Loop and Advanced Function Techniques

console.log('Start');

setTimeout(() => console.log('Macrotask'), 0);

Promise.resolve().then(() => console.log('Microtask'));

console.log('End');

// Output: Start, End, Microtask, Macrotask...........

console.log('Start');

setTimeout(() => console.log('Macrotask'), 0);

Promise.resolve().then(() => console.log('Microtask'));

console.log('End');

// Output: Start, End, Microtask, Macrotask

