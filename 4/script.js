console.log(generateTable(4, 5));

let form = generateForm();
document.body.appendChild(form);

console.log(form);

function generateForm() {
  let form = document.createElement("form");

  let loginDiv = document.createElement("div");
  let login = document.createElement("input");
  let loginLabel = document.createElement("label");

  login.type = "text";
  login.id = "login";
  loginLabel.setAttribute("for", "login");
  loginLabel.textContent = "Логін: ";
  loginDiv.appendChild(loginLabel);
  loginDiv.appendChild(login);

  let pass1Div = document.createElement("div");
  let pass1 = document.createElement("input");
  let pass1Label = document.createElement("label");

  pass1.type = "password";
  pass1.id = "pass1";
  pass1Label.setAttribute("for", "pass1");
  pass1Label.textContent = "Пароль: ";
  pass1Div.appendChild(pass1Label);
  pass1Div.appendChild(pass1);

  let pass2Div = document.createElement("div");
  let pass2 = document.createElement("input");
  let pass2Label = document.createElement("label");

  pass2.type = "password";
  pass2.id = "pass2";
  pass2Label.setAttribute("for", "pass2");
  pass2Label.textContent = "Повторіть пароль: ";
  pass2Div.appendChild(pass2Label);
  pass2Div.appendChild(pass2);

  let sexDiv = document.createElement("div");
  let radioDiv = document.createElement("div");
  let sexLabel = document.createElement("label");
  let sexMan = document.createElement("input");
  let sexWomen = document.createElement("input");
  let manLabel = document.createElement("label");
  let womenLabel = document.createElement("label");

  sexMan.type = "radio";
  sexMan.id = "man";
  sexMan.name = "sex";

  sexWomen.type = "radio";
  sexWomen.id = "women";
  sexWomen.name = "sex";

  manLabel.setAttribute("for", "man");
  manLabel.textContent = "чоловік";

  womenLabel.setAttribute("for", "women");
  womenLabel.textContent = "жінка";

  sexLabel.textContent = "Стать: ";

  sexDiv.appendChild(sexLabel);
  sexDiv.appendChild(radioDiv);
  radioDiv.appendChild(sexMan);
  radioDiv.appendChild(manLabel);
  radioDiv.appendChild(sexWomen);
  radioDiv.appendChild(womenLabel);

  let cityDiv = document.createElement("div");
  let cityLabel = document.createElement("label");
  let cities = document.createElement("select");

  cityLabel.setAttribute("for", "city");
  cityLabel.textContent = "Вкажіть місто: ";

  cities.add(new Option("Житомир"));
  cities.add(new Option("Київ"));
  cities.add(new Option("Львів"));

  cityDiv.appendChild(cityLabel);
  cityDiv.appendChild(cities);

  let hobbiesDiv = document.createElement("div");
  let hobbiesLabel = document.createElement("label");
  let football = document.createElement("input");
  let chess = document.createElement("input");
  let painting = document.createElement("input");
  let music = document.createElement("input");

  let checkboxDiv = document.createElement("div");
  let footballLabel = document.createElement("label");
  let chessLabel = document.createElement("label");
  let paintingLabel = document.createElement("label");
  let musicLabel = document.createElement("label");

  hobbiesLabel.textContent = "Інтереси: ";
  football.type = "checkbox";
  footballLabel.textContent = "Футбол";

  chess.type = "checkbox";
  chessLabel.textContent = "Шахи";

  painting.type = "checkbox";
  paintingLabel.textContent = "Малювання";

  music.type = "checkbox";
  musicLabel.textContent = "Музика";

  hobbiesDiv.appendChild(hobbiesLabel);
  hobbiesDiv.appendChild(checkboxDiv);
  checkboxDiv.appendChild(football);
  checkboxDiv.appendChild(footballLabel);
  checkboxDiv.appendChild(chess);
  checkboxDiv.appendChild(chessLabel);
  checkboxDiv.appendChild(painting);
  checkboxDiv.appendChild(paintingLabel);
  checkboxDiv.appendChild(music);
  checkboxDiv.appendChild(musicLabel);

  let btnDiv = document.createElement("div");
  let resetBtn = document.createElement("button");
  let submitBtn = document.createElement("button");
  let btnTd1 = document.createElement("div");
  let btnTd2 = document.createElement("div");

  btnTd1.style = "display: table-cell";
  btnTd2.style = "display: table-cell";
  resetBtn.type = "reset";
  resetBtn.textContent = "Очистити";
  submitBtn.type = "submit";
  submitBtn.textContent = "Відправити";

  btnTd2.appendChild(resetBtn);
  btnTd2.appendChild(submitBtn);

  btnDiv.appendChild(btnTd1);
  btnDiv.appendChild(btnTd2);

  form.appendChild(loginDiv);
  form.appendChild(pass1Div);
  form.appendChild(pass2Div);
  form.appendChild(sexDiv);
  form.appendChild(cityDiv);
  form.appendChild(hobbiesDiv);
  form.appendChild(btnDiv);

  return form;
}

function generateTable(m, n) {
  let table = document.createElement("table");
  for (let i = 0; i < m; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < n; j++) {
      let td = document.createElement("td");
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  return table;
}
