// const showSomething = () => {
//   console.log("Ce message a été affiché après 3 secondes");
// };

// setTimeout(showSomething, 3000);
// console.log("Avant les 3 secondes");

const say = (str) => {
  console.log(str);
};

setInterval(() => {
  say("hello");
}, 1000);

setInterval(() => {
  say("Je m'apelle vincent");
}, 1500);

let counter = 0;

const say2 = (str) => {
  console.log(str);

  if (counter === 5) {
    clearInterval(repeat);
  } else {
    counter++;
  }
};

let repeat = setInterval(() => {
  say2("Aurevoir");
}, 500);
