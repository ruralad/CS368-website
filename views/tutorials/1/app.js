const table = document.querySelector("table");
const button = document.querySelector("#submitButton");
const input = document.querySelector("#content");
const err = document.querySelector("span");

button.addEventListener("click", (event) => {
  event.preventDefault();
  if (input.value == "") {
    err.style.display = "inline";
  } else {
    let newRow = table.insertRow(1);
    let newCell = newRow.insertCell(0);
    newCell.innerHTML = input.value;
    input.value = "";
  }
});

input.addEventListener("input", () => {
  if (input.value == "") err.style.display = "inline";
  else err.style.display = "none";
});
