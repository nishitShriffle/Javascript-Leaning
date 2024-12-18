const library = [
  {
    title: 'My life',
    author: 'Me',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Your can do it?',
    author: 'You',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'How to do coding',
    author: 'coder',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

library[0].status.read = true;
library[0].status.reading = true;
library[1].status.read = true;
library[1].status.reading = true;
library[2].status.read = true;
library[2].status.reading = true;

const { title: firstbook } = library[0];

const str = JSON.stringify(library);

console.log(str);
