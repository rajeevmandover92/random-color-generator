let btn = document.querySelector('button');
let h3 = document.querySelector('h3');
let div = document.querySelector('div');

function getrandomColor(){
    let r = Math.floor(Math.random()*256);    
    let g = Math.floor(Math.random()*256);    
    let b = Math.floor(Math.random()*256);    

    let color = `rgb(${r}, ${g}, ${b})`;
    return color;
};


btn.addEventListener('click', function(){
    let randomColor = getrandomColor();
    h3.innerText = randomColor;
    div.style.backgroundColor = randomColor;
});



