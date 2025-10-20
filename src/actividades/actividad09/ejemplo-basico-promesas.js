console.log("\n\n----- Promises -----\n\n");

const promesaBasica = new Promise((resolve, reject) => {
  const exito = true;

  if (exito) {
    resolve("La operacion fue exitosa");
  } else {
    reject("Ocurrio un error en la operacion");
  }
});

promesaBasica
  .then((resultado) => console.log("Then", resultado))
  .catch((error) => console.log("Catch", error));

const user = {
  username: "admin",
  password: "1234",
  active: true,
};

function login(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user.username !== "admin" || user.password !== "1234") {
        reject("Credenciales incorrectas");
        return;
      }

      if (!user.active) {
        reject("El usuario esta inactivo, contacte al administrador.");
        retrun;
      }

      resolve(`Bienvenido ${user.name}, acceso concedido.`);
    }, 2000);
  });
}

login(user)
  .then((mensaje) => console.log(mensaje))
  .catch((error) => console.log(error));

function setp1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Paso 1 completado");
      resolve();
    }, 1000);
  });
}

function setp2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Paso 2 completado");
      resolve();
    }, 1000);
  });
}

function setp3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Paso 3 completado");
      resolve();
    }, 1000);
  });
}

setp1()
  .then(() => setp2())
  .then(() => setp3())
  .then(() => console.log("Todos los pasos completados"));
