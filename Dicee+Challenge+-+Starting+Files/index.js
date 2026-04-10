function rollDice(){
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomImage = "dice" + randomNumber1 + ".png";
let randomImageSource = "images/" + randomImage;
document.querySelector(".img1").setAttribute("src", randomImageSource);



let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImage1 = "dice" + randomNumber2 + ".png";
let randomImageSource1 = "images/" + randomImage1;

document.querySelector(".img2").setAttribute("src", randomImageSource1)

if(randomNumber1 > randomNumber2){
 document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
}
else{
document.querySelector("h1").innerHTML = "🤝 Draw!";
}
}
document.querySelector(".btn").addEventListener("click", rollDice);
