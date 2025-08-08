// Question 1
// let a = 0;
// {
// var a = 7; will cause error as redeclaring let variable using var
//   console.log(a);
// }

// output error

// Question 2
// var a = 25; //global scope
// function fn() {
//   console.log("1", a);
//   if (true) {
//     console.log("2", a);
//     var a = 18; //functional scope
//     if (true) {
//       console.log("3", a);
//       var a = 21; //functional scope
//     }
//     console.log("4", a);
//   }
// }

// Question 3

// var a = 24; global
// function fn() {
//   var a = 21; functional
//   if (true) {
//     console.log(a);
//     let a = 22; scope
//     console.log(a);
//   }
// }

// fn(); // output referernce error

// Question 4

// var a = 20;
// function fn() {
//   const a = 18;

//   if (true) {
//     console.log(a);
//     let a = 25;
//   }
// }

// fn(); // output referernce error

// function outer() {
//   let a = 5;
//   console.log(a); // undefined
//   function inner() {
//     let b = 10;
//     console.log(b); // undefined
//   }
//   inner();
// }
// outer();

// console.log(a);
// var a = 10;

// output undefined

// var x = 5;

// function test() {
//   console.log(x);
//   var x = 10;
// }
// test();

// output undefined

// var x = 5;

// function test() {
//   var x = 10;
//   console.log(x);
// }
// test();

// output 10

// sayHello();

// function sayHello() {
//   console.log("Hello!");
// }

// output Hello!

// greet();

// var greet = function () {
//   console.log("Hi!");
// };

// output: Type error

// function foo() {
//   console.log(bar);
//   var bar = "I am bar";
// }
// foo();

// output: undefined

// 6. Output of this code?

// function testHoist() {
//   console.log(typeof message);
//   var message = "Hello World!";
// }
// testHoist();

// output: undefined

// var a = 1;

// (function () {
//   console.log(a);
//   var a = 2;
// })();

// output: undefined

// function example() {
//   console.log(a);
//   a = 3;
// }
// example();
// console.log(a);
// var a = 5;

// output: undefined

// hoistedFunction();

// function hoistedFunction() {
//   console.log("This works!");
// }

// notHoistedFunction();

// var notHoistedFunction = function () {
//   console.log("Will this work?");
// };

// function printName() {
//   var name = "John";
//   console.log(name);
// }
// printName();

// function showMessage(message) {
//   console.log(message);
//   var message = "Overwritten!";
//   console.log(message);
// }
// showMessage("Hello!");

// Hello!
// Overwritten!

// function test(x) {
//   var x;
//   console.log(x);
// }
// test(42);

// 42

// function example(y) {
//   console.log(y);
//   var y = 10;
// }
// example();

// undefined

// function tricky(a) {
//   console.log(a); // ?
//   {
//     let a = 20;
//     console.log(a); // ?
//   }
//   console.log(a); // ?
// }
// tricky(10);

// 10
// 20
// 10

// function myFunc(x) {
//   let x = 5;
//   console.log(x);
// }
// myFunc(10);

// error

// function myFunc(x) {
//   var x = 5;
//   console.log(x);
// }
// myFunc(10);

// fixed with var : 5

// function foo(bar) {
//   if (true) {
//     var bar = "new";
//   }
//   console.log(bar);
// }
// foo("original");

// new

// function duplicate(a) {
//   function a() {
//     return "I'm a function!";
//   }
//   console.log(typeof a);
// }
// duplicate(42);

// function

// let x = 10;

// function printX() {
//   console.log(x);
// }
// printX();

// function outer() {
//   let count = 0;
//   return function inner() {
//     count++;
//     console.log(count);
//   };
// }

// const counter = outer();
// counter();
// counter();
// counter();

// let a = "global";

// function outer() {
//   let a = "outer";
//   function inner() {
//     console.log(a);
//   }
//   inner();
// }
// outer();

// function foo() {
//   console.log(bar);
// }
// let bar = 10;
// foo();

// ------------- Functions ----------------------------------------------------

// function square(num) {
//   return num * num;
// }

// console.log(square(2));

//Write a function to check if a number is even.

// function isEven(num) {
//   return num % 2 === 0;
// }

// console.log(isEven(2));

// Write a function that returns the factorial of a number.

// function factorial (num) {
//   return num
// }

// Create a function that accepts another function as a parameter and calls it.

// function printArr(arr) {
//   return arr;
// }

// function arrV(arr) {
//   arr.map((a) => {
//     console.log(a);
//   });
// }

// const outer = printArr(arrV);

// outer([1, 2, 3]);

// Convert this function into an arrow function:

// function add(a, b) {
//   return a + b;
// }

// const add = (a, b) => {
//   return a + b;
// };

// console.log(add(1, 2));

// function outer() {
//   let x = 2;
//   return function inner() {
//     console.log(x);
//   };
// }
// const instance = outer();

// instance();

function outer() {
  let x = { val: 14 };
  return {
    inc: () => {
      x.val++;
      console.log(x.val);
    },
  };
}
const inner1 = outer();
const inner2 = outer();
inner1.inc();
inner2.inc();
inner1.inc();
inner2.inc();
