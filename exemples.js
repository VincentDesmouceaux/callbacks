// const afterCreation = (name) => {
//   console.log(`le compte de ${name} a bien été créé`);
// };

const createAccount = (name, callback) => {
  console.log(`le compte de ${name} est en cours de création`);
  callback(name);
};

// createAccount("Xavier", afterCreation);

createAccount("Farid", (name) => {
  console.log(`le compte de ${name} a bien été créé`);
});

// EXEMPLE 2

const whatIsYourName = () => {
  console.log("mon nom est personne");
};
whatIsYourName();

const whatIsYourName2 = (name) => {
  console.log(`mon nom est ${name}`);
};

whatIsYourName2("Vincent");

const whatIsYourName3 = (name, cb) => {
  cb(name);
};

whatIsYourName3("Vincent", (name) => {
  console.log(`mon nom est ${name}`);
});
