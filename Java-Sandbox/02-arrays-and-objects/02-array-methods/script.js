let x;

const arr = [34, 55, 64, 24, 27, 44];

// arr.push(100);

// arr.pop();

// arr.unshift(1);

// arr.shift();

// arr.reverse();

x = arr.includes(34);

x = arr.indexOf(24);

// x = arr.slice(0, 2);

// x = arr.splice(0, 1);

x = arr.splice(1, 4).reverse().toString().charAt(0);

console.log(arr, x);
