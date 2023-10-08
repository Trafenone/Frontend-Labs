function focusHandler(event) {
  let parent = event.target.parentNode;
  parent.className = 'focused';
}

function blurHandler(event) {
    let parent = event.target.parentNode;
    parent.classList.remove('focused');
}