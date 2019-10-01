var randomNumber1 = Math.floor(Math.random() * ((6-1)+1) + 1);
//var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * ((6-1)+1) + 1);
//var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player1 Wins";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player2 Wins 🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw! 👔👏"
}


//Math.floor(Math.random() * 6 + 1);
//document.querySelector("img").setAttribute("src", "images/dice1.png");