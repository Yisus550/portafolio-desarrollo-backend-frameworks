console.log("\n\n ----- Destructuring -----\n\n");

const person = {
  firstname: "Jesus",
  lastname: "Romero",
  age: 21,
};
console.log(person);

// Destructuring
const { firstname, lastname, age } = person;
console.table({ firstname, lastname, age });

// Alias in destructuring
const { lastname: apellido } = person;
console.log(`Apellido: ${apellido}`);

// String destructuring
const str = "This is a string example";
const [a, b, c, d, e, f] = str;
const [, , , , , , , , , , s11] = str; // Skip characters
console.log({ a, b, c, d, e, f });
console.log(`Tenth character: ${s11}`);

// Array destructuring
const fruits = ["Apple", "Banana", "Cherry", "Grapes"];
const [fruit1, fruit2, fruit3, fruit4] = fruits;
console.table({ fruit1, fruit2, fruit3, fruit4 });

// Numbers array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [num1, num2, ...rest] = numbers;
console.table(rest);

// Returning environment variables
const { PORT = 3000, HOST = "localhost" } = process.env;
console.log(`Server running at http://${HOST}:${PORT}`);
