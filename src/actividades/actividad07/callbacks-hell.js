function step1(next) {
  setTimeout(() => {
    console.log("Paso 1");
    next();
  }, 2000);
}

function step2(next) {
  setTimeout(() => {
    console.log("Paso 2");
    next();
  }, 1500);
}

function step3(next) {
  setTimeout(() => {
    console.log("Paso 3");
    next();
  }, 1000);
}

step1(() => {
  step2(() => {
    step3(() => {
      console.log("Finalizado");
    });
  });
});
