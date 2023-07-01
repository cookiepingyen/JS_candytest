let Celsius = document.querySelector(".Celsius");
let Fahrenheit = document.querySelector(".Fahrenheit");
let CtoF = document.querySelector(".CtoF");
let FtoC = document.querySelector(".FtoC");
let Fvalue = document.querySelector(".Fvalue");
let Cvalue = document.querySelector(".Cvalue");

CtoF.addEventListener("click", function () {
  let c = Number(Celsius.value);

  Fvalue.textContent = ((c * 9) / 5 + 32).toFixed(1);
});

FtoC.addEventListener("click", function () {
  let f = Number(Fahrenheit.value);

  Cvalue.textContent = (((f - 32) / 9) * 5).toFixed(1);
});
