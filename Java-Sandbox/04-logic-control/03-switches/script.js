let d = new Date(2024, 4, 12, 19, 0, 0);

const month = d.getMonth();
const hour = d.getHours();

switch (month) {
  case 1:
    console.log('Month is Janrary');
    break;
  case 2:
    console.log('Month is Feburary');
    break;
  case 3:
    console.log('Month is March');
    break;
  default: {
    console.log('Month is not jan, feb or march');
  }
}

switch (true) {
  case hour < 12:
    console.log('Good Morning');
    break;
  case hour < 18:
    console.log('Good Afternoon');
    break;
  default:
    console.log('Good Night');
}
