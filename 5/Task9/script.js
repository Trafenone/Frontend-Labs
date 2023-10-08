const table = document.querySelector("#basket");
const basket = [];

const clearRows = () => {
  let row = table.getElementsByTagName("tr")[0];
  table.innerHTML = '';
  table.appendChild(row);
};

const updateTable = () => {
  clearRows();
  for (let key in basket) {
    let tr = document.createElement("tr");
    let tdTitle = document.createElement("td");
    let tdCount = document.createElement("td");

    tdTitle.textContent = key;
    tdCount.textContent = basket[key];
    tr.appendChild(tdTitle);
    tr.appendChild(tdCount);
    table.appendChild(tr);
  }
};

const buy = (name) => {
  let count = basket[name];
  if (count !== undefined) {
    basket[name] = count + 1;
  } else {
    basket[name] = 1;
  }
  updateTable();
};
