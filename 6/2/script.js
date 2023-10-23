const container = document.querySelector(".container");
const textarea = document.querySelector("textarea");

textarea.addEventListener("input", () => {
  container.textContent = '';
  let rows = textarea.value.split("\n");
  rows.forEach((cols) => {
    let tr = document.createElement('tr');
    [...cols].forEach((item) => {
        let td = document.createElement('td');
        if(item === '1') 
            td.className = 'active';
        tr.appendChild(td);
    });
    container.appendChild(tr);
  });
});
