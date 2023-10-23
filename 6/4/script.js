document.querySelectorAll(".remove").forEach((item) => {
  item.addEventListener("click", (event) => {
    event.target.parentNode.remove();
  });
});

document.querySelectorAll(".edit").forEach((item) => {
  item.addEventListener("click", (event) => {
    let div = event.target.parentNode.querySelector('.post__text');
    let p = div.querySelector('p');
    let textarea = document.createElement('textarea');
    textarea.value = p.textContent;
    div.replaceChild(textarea, p);

    textarea.addEventListener('blur', () => {
        p.textContent = textarea.value;
        div.replaceChild(p, textarea);
    });
  });
});
