
itemList = ["rock", "paper", "scissors"]

var playerItem = "";

var cpuItem = "";

let score1 = localStorage.getItem("score");


let numberOfTools = document.querySelectorAll(".tool").length;

for (let i = 0; i < numberOfTools; i++) {

document.querySelectorAll(".tool")[i].addEventListener("click", function(){

    let toolValue = this.name
    playerItem += toolValue
    document.getElementById("pick").innerHTML = "You chose "
    if (playerItem.length > 1) {
        cpuTurn();
        compareScores();
        announceWinner();
        animation();
    }

});

}


function cpuTurn(){

    let cpuNumber = Math.floor(Math.random() * 3);
    cpuItem += itemList[cpuNumber]
    document.getElementById("cpuPick").innerHTML = "House chose "
}

function compareScores(){

if (playerItem === "rock" && cpuItem === "paper" ) {
  document.getElementById("winner").innerHTML = "You Lose";
  document.getElementById("winDesc").innerHTML = "Paper Covers Rock";

} else if (playerItem === "rock" && cpuItem === "scissors" ) {
  document.getElementById("winner").innerHTML = "You Win";
  document.getElementById("winDesc").innerHTML = "Rock Crushes Scissors";


} else if (playerItem === "paper" && cpuItem === "rock" ) {
  document.getElementById("winner").innerHTML = "You Win";
  document.getElementById("winDesc").innerHTML = "Paper Covers Rock";

} else if (playerItem === "paper" && cpuItem === "scissors" ) {
  document.getElementById("winner").innerHTML = "You Lose";
  document.getElementById("winDesc").innerHTML = "Paper Cuts Scissors";

} else if (playerItem === "scissors" && cpuItem === "rock" ) {
  document.getElementById("winner").innerHTML = "You Lose";
  document.getElementById("winDesc").innerHTML = "Rock Smashes Scissors";

} else if (playerItem === "scissors" && cpuItem === "paper" ) {
  document.getElementById("winner").innerHTML = "You Win";
  document.getElementById("winDesc").innerHTML = "Scissors Cuts Paper";


} else if (playerItem === cpuItem) {
  document.getElementById("winner").innerHTML = "Draw";
}

}


function announceWinner() {

    document.querySelector(".set").classList.add("invisible");

    playerDiv = document.createElement("div");
    playerDiv.setAttribute("id", "playDiv");
    document.getElementById("stage").appendChild(playerDiv)

    playerImg = document.createElement("img");
    playerImg.setAttribute("id", "playImg");
    playerImg.setAttribute("src", "images/icon-"+playerItem+".svg")
    document.getElementById("playDiv").appendChild(playerImg);

    houseDiv = document.createElement("div");
    houseDiv.setAttribute("id", "houseDiv");
    document.getElementById("stage").appendChild(houseDiv)

    houseImg = document.createElement("img");
    houseImg.setAttribute("id", "houseImg");
    houseImg.setAttribute("src", "images/icon-"+cpuItem+".svg")
    document.getElementById("houseDiv").appendChild(houseImg);

    shadowDiv = document.createElement("div");
    shadowDiv.setAttribute("id", "shadowDiv");
    document.getElementById("stage").appendChild(shadowDiv)

    shadowDiv2 = document.createElement("div");
    shadowDiv2.setAttribute("id", "shadowDiv2");
    document.getElementById("stage").appendChild(shadowDiv2)

    shadowDiv3 = document.createElement("div");
    shadowDiv3.setAttribute("id", "shadowDiv3");
    document.getElementById("stage").appendChild(shadowDiv3)

    shadowDiv4 = document.createElement("div");
    shadowDiv4.setAttribute("id", "shadowDiv4");
    document.getElementById("stage").appendChild(shadowDiv4)

    shadowBase = document.createElement("div");
    shadowBase.setAttribute("id", "cpuBase");
    document.getElementById("stage").appendChild(shadowBase)


    document.getElementById("playAgain").classList.remove("invisible");;

}

function animation() {

    $(document).ready(function () {
        $("#pickDiv").fadeIn();
        $("#playDiv").delay(600).fadeIn();
        $("#cpuPickDiv").delay(1000).fadeIn();
        $("#cpuBase").delay(1000).fadeIn();
        $("#houseDiv").delay(1600).fadeIn();
    });

    if (document.getElementById("winner").innerHTML === "You Win") {

        $(document).ready(function () {
            $("#shadowDiv").delay(1800).fadeIn("slow").fadeOut(1000);
            $("#shadowDiv2").delay(1800).fadeIn(1000).fadeOut("slow");

        });

    } else if (document.getElementById("winner").innerHTML === "You Lose") {
        $(document).ready(function () {
            $("#shadowDiv3").delay(1800).fadeIn("slow").fadeOut(1000);
            $("#shadowDiv4").delay(1800).fadeIn(1000).fadeOut("slow");
        });

    } else if (document.getElementById("winner").innerHTML === "Draw") {
        $(document).ready(function () {
            $("#shadowDiv").delay(1800).fadeIn("slow").fadeOut(1000);
            $("#shadowDiv2").delay(1800).fadeIn(1000).fadeOut("slow");
            $("#shadowDiv3").delay(1800).fadeIn("slow").fadeOut(1000);
            $("#shadowDiv4").delay(1800).fadeIn(1000).fadeOut("slow");
        });

    }


    $(document).ready(function () {
            $("#winnerDiv").delay(2000).fadeIn();

        });

}

// document.querySelector("#btn").addEventListener("click", function(){
//    document.querySelector("#ruleBox").classList.toggle("invisible");
//
// });

document.querySelector("#btn").addEventListener("click", function(){
   $("#ruleBox").fadeToggle();
});