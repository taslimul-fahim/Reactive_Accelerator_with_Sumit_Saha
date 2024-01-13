var lang = "Bangla";

// function learn(topic) {
//   var lang = topic;
//   // console.log(`I am learning  ${topic}`);
// }

// learn("Javascript");
// console.log(`I know ${lang}`);

// If didn't return anything from function it's return undefined automatically.
// function hello() {}


/* FUNCTION */
// function expression
// const hello = function () {};

// named function expression
// const hello = function hello() {};

// arrow function
// If operation could be in one line than it does need curly braces or expand it can do in one line
// const hello = (a, b) => a + b;
// Or it's looks like this
// const hello () => {
//   if (true) {
//     let name = 'Fahim'
//   }
// }

// anonymous function
// function hello() {
//   return function () {
//     let name = 'Fahim'
//   }
// }

//* array method *//
const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']

const result = fruits.find((f) => f === 'Banana')
const result0 = fruits.findIndex((f) => f === 'Banana')

// console.log(result0)

const result = fruits.slice(2, 4)
const result = fruits.splice(2, 1)
const result = fruits.concat('Fruit 1')
const result = fruits.push()

const result = fruits.map(() =>)

