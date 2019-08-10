console.log('==========');
console.log('closure.js');
console.log('==========\n');

let debug = false;

// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const greeting = () => {
  let c = 0;
  if (debug) console.log('c (outside): '+c);
  return function(name) {
    c = c+1;
    if (debug) console.log('c (inside): '+c);
    let bangs = '!'.repeat(c);
    if (debug) console.log('bangs: '+bangs);
    let g = `Greetings, ${name}${bangs}`;
    if (debug) console.log('g: '+g);
    return g;
  };
};
const g = greeting();
console.log(g('Paul'));
console.log(g('Jared'));
console.log(g('Raymond'));
console.log(g('Earthlings'));

console.log('');  // Blank line

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====
console.log('Return a function that when invoked increments and returns a counter variable.');
const counter = () => {
  let count = 1;
  return _ => count++;
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const c = counter();
console.log(c());
console.log(c());
console.log(c());

console.log('');  // Blank line

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
console.log('Return an object that has two methods called `increment` and `decrement`.');
console.log('`increment` should increment a counter variable in closure scope and return it.');
console.log('`decrement` should decrement the counter variable and return it.');
const counterFactory = () => {
  let count = 0;
  if (debug) console.log('count: '+count);

  return {
    increment() { 
      let c = count++;
      if (debug) console.log('count: '+c);
      return c;
    },
    decrement() {
      let c = count--;
      if (debug) console.log('count: '+c);
      return c;
    }
  };
};

let f = counterFactory();
console.log(f.increment());
console.log(f.increment());
console.log(f.increment());
console.log(f.decrement());
console.log(f.increment());
console.log(f.decrement());
console.log(f.decrement());
console.log(f.decrement());