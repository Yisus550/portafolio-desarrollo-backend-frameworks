console.log("\n\n----- Arrow Functions -----\n\n");

// Introducing arrow functions
function sumar(a, b) {
  return a + b;
}
console.log(`Resultado de la suma: ${sumar(2, 4)}`);

const sumar2 = (a, b) => a + b;
console.log(`Result number 2: ${sumar2(3, 5)}`);

// Arrow function with single parameter
const cuadrado = (num) => num * num;
console.log(`El cuadrado es: ${cuadrado(5)}`);

// Arrow function in array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(`Números doblados: ${doubled}`);

const even = numbers.filter((num) => num % 2 === 0);
console.log(`Números pares: ${even}`);

// Comparing 'this' in regular functions vs arrow functions
const user = {
  name: "Alice",
  regularFunction: function () {
    console.log("Regular Function 'this':", this.name);
  },
  arrowFunction: () => {
    try {
      console.log("Arrow Function 'this':", this.name);
    } catch (error) {
      console.error("Error in Arrow Function 'this':", error.message);
    }
  },
};

user.regularFunction(); // Alice
user.arrowFunction(); // undefined (or global context)
