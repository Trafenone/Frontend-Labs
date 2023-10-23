const table = document.querySelector("table");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
let count = 1;

const addHandler = (e) => {
  let tr = document.createElement("tr");
  let tdId = document.createElement("td");
  let tdFirst = document.createElement("td");
  let tdLast = document.createElement("td");

  tdId.textContent = count++;
  tdFirst.textContent = firstName.value;
  tdLast.textContent = lastName.value;

  tr.appendChild(tdId);
  tr.appendChild(tdFirst);
  tr.appendChild(tdLast);
  table.appendChild(tr);

  firstName.value = "";
  lastName.value = "";
};
