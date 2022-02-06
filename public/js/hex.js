const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

color = document.querySelector('.color');
btn = document.querySelector('#btn');

btn.addEventListener('click',()=>{
    let hexColor = '#';
    for(i=0; i<6; i++){
        hexColor += hex[randomValue()];
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});

let randomValue = () => Math.floor(Math.random()*hex.length);

