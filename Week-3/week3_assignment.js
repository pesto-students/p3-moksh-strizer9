// Exercise 3.1
// Idea is to create a unique key : value pair of (arguments and it's returned value) to acheive this, we need to create a
// function which returns a function, we'll leave cache out of the returned function
// cache can remember its values since the returned function has a closure over it.
function add(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}
function memoize(fn) {
  let cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    let f = 1;
    if (!(key in cache)) {
      f = f - 1;
      cache[key] = fn(...args);
    }
    if (f == 0) console.log("computed output");
    else console.log("memoized output");
    return cache[key];
  };
}

const memoizeAdd = memoize(add);
console.log(memoizeAdd(100, 100));
console.log(memoizeAdd(1200));
console.log(memoizeAdd(100, 200));
console.log(memoizeAdd(100, 100));
// "computed output" 200
// "computed output" 1200
// "computed output" 300
// "memoized output" 200
// cache --
// {
//     "[100,100]": 200,
//     "[1200]": 1200,
//     "[100,200]": 300
// }

// Exercise 3.2
// Output would be "count is0" because "let message = `Count is${count}`" is executed once when createIncrement() was called,
// that time count was 0 but if we put this "let message = `Count is${count}`" inside log function
// then it will see the updated value of count which is 3

function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is${count}`;
  function log() {
    // let message = `Count is${count}`; // in this case it would print "count is3"
    console.log(message);
  }
  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log();

// Exercise 3.3
//  For this we would move the items declaration outside of the return statement this way it won't be accessible outside createStack function
function createStack() {
  const items = [];
  return {
    // items = []; // moved it outside return statement
    push(item) {
      items.push(item);
    },
    pop() {
      return items.pop();
    },
  };
}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop();
stack.items; // => undefined

// Exercise 3.4
// Simple funciton for call, apply, bind

let name = {
  firstname: "Vishal ",
  lastname: "Yadav",
};
printFullName = function (hometown, company) {
  console.log(
    this.firstname + " " + this.lastname + ", " + hometown + ", " + company
  );
};

//the first argument e.g name inside call method is always a reference to (this) variable and latter will be function variable

printFullName.call(name, "Gurgaon", "Ima");

//apply method is same as the call method
//the only diff is that, the function arguments are passed in Array list

printFullName.apply(name, ["Gurgaon", "Ima"]);

//bind method looks same as call method, the bind returns a function that can be used latter by invoking it ,
//does'nt call it immediately

let printMyNAme = printFullName.bind(name, "Gurgaon", "Ima");
printMyNAme();
