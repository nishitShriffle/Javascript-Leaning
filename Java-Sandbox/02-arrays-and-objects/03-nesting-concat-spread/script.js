let x;

const fruits = ['aaple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

const allFruits = [fruits, berries];

x = allFruits[1][0];

x = fruits.concat(berries);

x = [...fruits, ...berries];

console.log(x);
