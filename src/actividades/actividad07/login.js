function login(user, callback) {
  setTimeout(() => {
    if (user.username === "admin" && user.password === "password123") {
      callback(null, "Acceso concedido");
    } else {
      callback("Acceso denegado", null);
    }
  }, 2000);
}

const user = { username: "admin", password: "password123" };
login(user, (error, message) => {
  if (error) {
    console.log("Error: ", error);
    return;
  }

  console.log(message);
});
