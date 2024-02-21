const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;


let dice1 = document.querySelector(".img1");
dice1.setAttribute("src", "/images/dice" + randomNumber1 + ".png");
let dice2 = document.querySelector(".img2");
dice2.setAttribute("src", "/images/dice" + randomNumber2 + ".png");

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML= "🚩 Player 1 Wins ";
}
else if(randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML= "Draw";
}
else{
    document.querySelector("h1").innerHTML= "Player 2 Wins 🚩";

}