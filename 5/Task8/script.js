const clickHandler = () => {
    let img = document.querySelector('img');
    if(img.classList.contains('big')) {
        img.classList.replace('big', 'small');
    } else {
        img.classList.replace('small', 'big');
    }
}