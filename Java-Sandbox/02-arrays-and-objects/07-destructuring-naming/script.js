const firstName = 'Nishit';
const lastName = 'Solanki';
const age = 30;

const person = {
  firstName,
  lastName,
  age,
};

console.log(person.age);

// Destructuring

const todo = {
  id: 1,
  title: 'Take out trash',
  user: {
    name: 'John',
  },
};

const {
  id: todoId,
  title,
  user: { name },
} = todo;

console.log(todoId);

// Destructuring arrays

const numbers = [23, 67, 33, 49];

const [first, second, ...all] = numbers;

console.log(first, second, ...all);
