let x;

const fruits = ['aaple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

const allFruits = [fruits, berries];

x = allFruits[1][0];

x = fruits.concat(berries);

x = [...fruits, ...berries];

const arr = [1, 2, 3, 4, 5];

arr.push(6);

arr.reverse().push(0);

arr1 = [1, 2, 3, 4, 5];

arr2 = [5, 6, 7, 8, 9, 10];

arr1.pop();

arr3 = [...arr1, ...arr2];

console.log(arr3);
