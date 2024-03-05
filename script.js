const colors=['#fcc603','#03fc73','#fc0390','#f5cb42','#42f5d1','#41e079'];
let btn =document.querySelector("#btn");
let show=document.getElementById("content");
const body=document.body;
body.style.backgroundColor='skyblue';
btn.addEventListener('click',changeColor);
function changeColor(){
    const clr=parseInt(Math.random()*colors.length);
    body.style.backgroundColor=colors[clr];
    show.textContent=colors[clr];
}