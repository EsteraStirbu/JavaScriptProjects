const hex = [0, 1 ,2 ,3 , 4 , 6 ,7 ,8 , 9 , "A", "B" , "C", "D", "E", "F" ];
//#f15025
 const btn =document.getElementById("btn");
 const color = document.querySelector('.color');

 btn.addEventListener('click', function(){
let hexColor = '#';
for(let i=0; i<6 ; i++){
hexColor += hex[getRandomNamber()]
}
color.textContent = hexColor;
document.body.style.backgroundColor = hexColor;
 });

 function getRandomNamber(){
     return Math.floor(Math.random()* hex.length);
 }