let biggie = document.querySelector("#my-input");
let hkolass = document.querySelector(".my-h2");

// alert("click");

// let kilik = document.querySelector("#my-button");
// kilik.addEventListener("click", function () {
//   alert(biggie.value);
// });
// let kilik = document.querySelector("#my-button");
// kilik.addEventListener("click", function () {
//   hkolass.innerText = biggie.value;
// });
let kilik = document.querySelector("#my-button");
kilik.addEventListener("click", function () {
  let num = Number(biggie.value);
  if (num < 10) {
    hkolass.innerHTML = `${num} is less than 10`;
  } else if (num === 10) {
    hkolass.innerHTML = `${num} is equal to 10`;
  } else {
    hkolass.innerHTML = `${num} is greater than 10`;
  }
});
