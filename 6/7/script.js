const sendHandler = () => {
  let login = document.querySelector("input");
  let comment = document.querySelector("textarea");
  let post = document.querySelector(".post").cloneNode(true);
  post.querySelector(".login").textContent = login.value;
  post.querySelector(".date").textContent = new Date().toLocaleString();
  post.querySelector(".content").textContent = comment.value;

  login.value = "";
  comment.value = "";

  document.querySelector(".posts").appendChild(post);
};
