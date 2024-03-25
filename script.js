/** @type {HTMLInputElement} */
let one = document.getElementById("join1");
/** @type {HTMLInputElement} */
let two = document.getElementById("join2");
/** @type {HTMLInputElement} */
let three = document.getElementById("join3");
/** @type {HTMLInputElement} */
let four = document.getElementById("join4");

one.addEventListener("input", () => {
  if (one.value != "") {
    two.focus();
  } else {
  }
});
two.addEventListener("input", () => {
  if (two.value != "") {
    three.focus();
  } else {
    one.focus();
  }
});
three.addEventListener("input", () => {
  if (three.value != "") {
    four.focus();
  } else {
    two.focus();
  }
});
four.addEventListener("input", () => {
  if (four.value != "") {
    four.focus();
  } else {
    three.focus();
  }
});
