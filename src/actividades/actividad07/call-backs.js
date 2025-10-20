console.log("\n\n----- Callbacks -----\n");

function greet(name, callback) {
  console.log("Procesando. . .");
  setTimeout(() => {
    callback(`Hola, ${name}`);
  }, 2000);
}

function showMessage(message) {
  console.log(message);
}

greet("Juan", showMessage);
