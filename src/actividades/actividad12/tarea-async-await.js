//Fase 1
function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function ejemploAsync() {
  console.log("Inicio de la funcion...");
  await esperar(2000); // Espera 2 segundos
  console.log("Han pasado 2 segundos...");
}

ejemploAsync();

// Fase 2
const user = {
  username: "admin",
  password: "1234",
  active: true,
};

function login(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user.username !== "admin" && user.password !== "1234") {
        reject("Usuario o contraseña incorrectos");
      }

      if (!user.active) {
        reject("Usuario inactivo");
      }

      resolve(`Binvenido ${user.username}`);
    }, 2000);
  });
}

async function ejecutarLogin() {
  try {
    const mensaje = await login(user);
    console.log(mensaje);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Fase 3
function setp(nombre, tiempo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Hola ${nombre}`);
      resolve();
    }, tiempo);
  });
}

async function ejecutarPasos() {
  await setp("Paso 1", 1000);
  await setp("Paso 2", 1000);
  await setp("Paso 3", 1000);
  console.log("Terminamos!");
}
