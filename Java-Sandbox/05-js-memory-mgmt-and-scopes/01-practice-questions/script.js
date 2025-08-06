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
