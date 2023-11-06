const blocks = document.querySelectorAll(".block");

function getRandomDirection() {
  return Math.random() > 0.5 ? 1 : -1;
}

function moveBlock(block) {
  const maxWidth = window.innerWidth - block.clientWidth;
  const maxHeight = window.innerHeight - block.clientHeight;
  let left = Math.random() * maxWidth;
  let top = Math.random() * maxHeight;
  let directionX = getRandomDirection();
  let directionY = getRandomDirection();

  function animate() {
    left += 1 * directionX;
    top += 1 * directionY;
    if (left < 0 || left > maxWidth) {
      directionX *= -1;
    }
    if (top < 0 || top > maxHeight) {
      directionY *= -1;
    }
    block.style.left = left + "px";
    block.style.top = top + "px";
    requestAnimationFrame(animate);
  }

  animate();
}

blocks.forEach((block) => {
  moveBlock(block);
});
