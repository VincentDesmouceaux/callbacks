const sum = (num1, num2) => {
  return num1 + num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const calculate = (a, b, func) => {
  const result = func(a, b);

  return `the result is ${result}.`;
};

console.log(calculate(3, 5, multiply));

var items = ["item1", "item2", "item3"];
var copie = [];

for (var i = 0; i < items.length; i++) {
  copie.push(items[i]);
}

console.log(copie);

const myFunc = () => {
  console.log("hello world");
};
myFunc();
