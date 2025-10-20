const user = process.env.USER;
const password = process.env.PASSWORD;
const port = process.env.PORT || 3000;

console.log(user, password, port);

const nodeEnv = process.env.NODE_ENV || "development";

// console.log(`Estamos en el entorno: ${nodeEnv}`);

if (nodeEnv === "production") {
  console.log("Estamos en producción");
} else {
  console.log("No estamos en producción");
}
