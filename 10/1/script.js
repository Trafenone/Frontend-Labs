const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const newsletter = document.getElementById("newsletter");
const genderMale = document.getElementById("gender-male");
const genderFemale = document.getElementById("gender-female");
const country = document.getElementById("country");

document.querySelectorAll("input, textarea, select").forEach((element) => {
  element.addEventListener("input", () => {
    saveData();
  });
});

function saveData() {
  const data = {
    name: name.value,
    email: email.value,
    message: message.value,
    newsletter: newsletter.checked,
    gender: genderMale.checked ? 'male' : genderFemale.checked ? 'female' : '',
    country: country.value,
  };

  localStorage.setItem("data", JSON.stringify(data));
}

document.addEventListener('DOMContentLoaded', () => {
  const data = JSON.parse(localStorage.getItem('data'));

  name.value = data.name;
  email.value = data.email;
  message.value = data.message;
  newsletter.checked = data.newsletter;
  data.gender === 'male' ? genderMale.checked = true : data.gender === 'female' ? genderFemale.checked = true : '';
  country.value = data.country;
});