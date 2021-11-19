const colors = ["green", "red", "blue", "yellow"];

colour = document.querySelector('.color');
btn = document.querySelector('.btn');

btn.addEventListener('click',()=>{
    randomNumber = randomValue();
    document.body.style.backgroundColor = colors[randomNumber];
    colour.textContent = colors[randomNumber];
    console.log(randomNumber);
})

let randomValue = () => Math.floor(Math.random() * colors.length);