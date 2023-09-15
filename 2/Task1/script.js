document.body.style.fontFamily = 'Arial';

let paragraphs = document.querySelectorAll('p');

paragraphs[0].style.cssText = `
    color: orange;
    background-color: yellow;
    font-size: 16px;
    padding: 5px;
    text-align: center;
`;

paragraphs[1].style.cssText = `
    color: blue;
    background-color: #add8e6;
    font-size: 14px;
    padding: 5px;
    text-align: right;
`;

paragraphs[2].style.cssText = `
    color: red;
    background-color: #ffb6c1;
    font-size: 12px;
    padding: 5px;
    text-align: left;
`;

document.querySelectorAll('td').forEach((element, index) => {
    if(index % 2 == 0) 
        element.className = 'selected';
});
  
