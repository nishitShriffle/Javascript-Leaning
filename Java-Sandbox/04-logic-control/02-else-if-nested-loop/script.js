let d = new Date(2024, 10, 7, 19, 0, 0);

const hour = d.getHours();

if (hour < 12) {
  console.log('Good Morning');
} else if (hour < 18) {
  console.log('Good Afternoon');
} else {
  console.log('Good Night');
}
