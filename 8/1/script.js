const time = document.querySelector(".time");

const f = () => {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    
    time.textContent = `${hours}:${minutes}:${seconds}`;
};

f();

let timer = setInterval(f, 1000);