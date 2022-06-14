const colors = ['green', "red", "rgba (133, 122m 200)" , "#f15025" ];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");
 
btn.addEventListener('click' , function(){
    //get random numeber between 0-3 colors[3]
    
 const randomNumber = getRandomNamber();
 console.log(randomNumber)
 document.body.backgroundColor = color [randomNumber];
 color.textContent = colors [randomNumber];
});

function getRandomNamber(){
    return Math.floor(Math.random()*colors.length);

}