let x;

let value = new Date();

x = value.toString();

x = value.getTime();
x = value.valueOf();

x = value.getFullYear();

x = value.getMonth() + 1;

x = value.getDate();

x = value.getDay();

x = `${value.getFullYear()}-${value.getMonth() + 1}-${value.getDate()}`;

x = Intl.DateTimeFormat('en-US').format(value);
x = Intl.DateTimeFormat('en-IN').format(value);
x = Intl.DateTimeFormat('default').format(value);

x = Intl.DateTimeFormat('default', { month: 'long' }).format(value);

x = value.toLocaleString('default', { month: 'short' });

x = value.toLocaleString('default', {
  month: 'short',
  weekday: 'long',
});

console.log(x);
