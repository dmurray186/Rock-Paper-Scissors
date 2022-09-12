
var playerItem = "";

var cpuItem = "";

var score1 = localStorage.getItem("score");
var score2 = localStorage.getItem("score2")

if (document.querySelector("#toolId").children.length === 3) {
    document.getElementById("scoreP").innerHTML = score1;
} else if (document.querySelector("#toolId").children.length === 5) {
    document.getElementById("scoreP").innerHTML = score2;
}

$(document).ready(function () {
        $("#scoreP").fadeIn();
    });


let numberOfTools = document.querySelectorAll(".tool").length;

for (let i = 0; i < numberOfTools; i++) {

document.querySelectorAll(".tool")[i].addEventListener("click", function(){

    document.querySelector("#scoreP").classList.add("invisible");
    document.querySelector("#clearScore").classList.add("invisible");
    $(document).ready(function () {
        $("#scoreP").fadeOut();
    });

    let toolValue = this.name
    playerItem += toolValue
    document.getElementById("pick").innerHTML = "You chose"
    if (playerItem.length > 1) {
        cpuTurn();
        compareScores();
        announceWinner();
        animation();
        scoreUpdate();
    }

});

}


function cpuTurn(){

    let cpuNumber = 0

    if (document.querySelector("#toolId").children.length === 5) {
         cpuNumber = Math.floor(Math.random() * 5);

    } else if (document.querySelector("#toolId").children.length === 3) {
         cpuNumber = Math.floor(Math.random() * 3);

    }
    cpuItem += document.querySelector("#toolId").children[cpuNumber].name;
    document.getElementById("cpuPick").innerHTML = "House chose"
}

//Sets values to hidden divs
function compareScores(){

if (playerItem === "rock" && cpuItem === "paper" ) {
  document.getElementById("winner").innerHTML = "You Lose";
  document.getElementById("winDesc").innerHTML = "Paper Covers Rock";

} else if (playerItem === "rock" && cpuItem === "scissors" ) {
  document.getElementById("winner").innerHTML = "You Win";
  document.getElementById("winDesc").innerHTML = "Rock Crushes Scissors";

} else if (playerItem === "rock" && cpuItem === "lizard" ) {
  document.getElementById("winner").innerHTML = "You Win";
  document.getElementById("winDesc").innerHTML = "Rock Crushes Lizard";


} else if (playerItem === "rock" && cpuItem === "spock" ) {
  document.getElementById("winner").innerHTML = "You Lose";
  document.getElementById("winDesc").innerHTML = "Spack Vapourises Rock";


} else if (playerItem === "paper" && cpuItem === "rock" ) {
  document.getElementById("winner").innerHTML = "You Win";
  document.getElementById("winDesc").innerHTML = "Paper Covers Rock";


} else if (playerItem === "paper" && cpuItem === "scissors" ) {
  document.getElementById("winner").innerHTML = "You Lose";
  document.getElementById("winDesc").innerHTML = "Scissors Cuts Paper";


} else if (playerItem === "paper" && cpuItem === "lizard" ) {
  document.getElementById("winner").innerHTML = "You Lose";
  document.getElementById("winDesc").innerHTML = "Lizard Eats Paper";


} else if (playerItem === "paper" && cpuItem === "spock" ) {
  document.getElementById("winner").innerHTML = "You Win";
  document.getElementById("winDesc").innerHTML = "Paper Disproves Spock";


} else if (playerItem === "scissors" && cpuItem === "rock" ) {
  document.getElementById("winner").innerHTML = "You Lose";
  document.getElementById("winDesc").innerHTML = "Rock Smashes Scissors";


} else if (playerItem === "scissors" && cpuItem === "paper" ) {
  document.getElementById("winner").innerHTML = "You Win";
  document.getElementById("winDesc").innerHTML = "Scissors Cuts Paper";


} else if (playerItem === "scissors" && cpuItem === "lizard" ) {
  document.getElementById("winner").innerHTML = "You Win";
  document.getElementById("winDesc").innerHTML = "Scissors Decapitates Lizard";


} else if (playerItem === "scissors" && cpuItem === "spock" ) {
  document.getElementById("winner").innerHTML = "You Lose";
  document.getElementById("winDesc").innerHTML = "Spock Smashes Scissors";


} else if (playerItem === "lizard" && cpuItem === "rock" ) {
  document.getElementById("winner").innerHTML = "You Lose";
  document.getElementById("winDesc").innerHTML = "Rock Smashes Lizard";


} else if (playerItem === "lizard" && cpuItem === "paper" ) {
  document.getElementById("winner").innerHTML = "You Win";
  document.getElementById("winDesc").innerHTML = "Lizard Eats Paper";


} else if (playerItem === "lizard" && cpuItem === "scissors" ) {
  document.getElementById("winner").innerHTML = "You Lose";
  document.getElementById("winDesc").innerHTML = "Scissors Decapitates Lizard";


} else if (playerItem === "lizard" && cpuItem === "spock" ) {
  document.getElementById("winner").innerHTML = "You Win";
  document.getElementById("winDesc").innerHTML = "Lizard Poisons Spock";


} else if (playerItem === "spock" && cpuItem === "rock" ) {
  document.getElementById("winner").innerHTML = "You Win";
  document.getElementById("winDesc").innerHTML = "Spock Vapourises Rock";


} else if (playerItem === "spock" && cpuItem === "paper" ) {
  document.getElementById("winner").innerHTML = "You Lose";
  document.getElementById("winDesc").innerHTML = "Paper Disproves Spock";


} else if (playerItem === "spock" && cpuItem === "scissors" ) {
  document.getElementById("winner").innerHTML = "You Win";
  document.getElementById("winDesc").innerHTML = "Spock Smashes Scissors";

} else if (playerItem === "spock" && cpuItem === "lizard" ) {
  document.getElementById("winner").innerHTML = "You Lose";
  document.getElementById("winDesc").innerHTML = "Lizard Poisons Spock";


} else if (playerItem === cpuItem) {
  document.getElementById("winner").innerHTML = "Draw";
}

}

//Creates player & house choices and shadow divs
function announceWinner() {

    if (document.querySelector("#toolId").children.length === 5) {
    document.querySelector(".set2").classList.add("invisible");

} else if (document.querySelector("#toolId").children.length === 3) {
    document.querySelector(".set").classList.add("invisible");
}
    let playerDiv = document.createElement("div");
    playerDiv.setAttribute("id", "playDiv");
    document.body.appendChild(playerDiv)

    let playerImg = document.createElement("img");
    playerImg.setAttribute("id", "playImg");
    playerImg.setAttribute("src", "images/icon-"+playerItem+".svg")
    document.getElementById("playDiv").appendChild(playerImg);

    let houseDiv = document.createElement("div");
    houseDiv.setAttribute("id", "houseDiv");
    document.body.appendChild(houseDiv)

    let houseImg = document.createElement("img");
    houseImg.setAttribute("id", "houseImg");
    houseImg.setAttribute("src", "images/icon-"+cpuItem+".svg")
    document.getElementById("houseDiv").appendChild(houseImg);

    let shadowDiv = document.createElement("div");
    shadowDiv.setAttribute("id", "shadowDiv");
    document.body.appendChild(shadowDiv)

    let shadowDiv2 = document.createElement("div");
    shadowDiv2.setAttribute("id", "shadowDiv2");
    document.body.appendChild(shadowDiv2)

    let shadowDiv3 = document.createElement("div");
    shadowDiv3.setAttribute("id", "shadowDiv3");
    document.body.appendChild(shadowDiv3)

    let shadowDiv4 = document.createElement("div");
    shadowDiv4.setAttribute("id", "shadowDiv4");
    document.body.appendChild(shadowDiv4)

    let shadowBase = document.createElement("div");
    shadowBase.setAttribute("id", "cpuBase");
    document.body.appendChild(shadowBase)

    document.getElementById("playAgain").classList.remove("invisible");

    if (document.getElementById("winner").innerHTML === "You Win") {
        if (document.querySelector("#toolId").children.length === 3) {
        score1++;
    } else if (document.querySelector("#toolId").children.length === 5) {
        score2++;
        }
    }


}

//Reveals all divs previously created
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

function scoreUpdate() {

    if (document.querySelector("#toolId").children.length === 3) {
        localStorage.setItem("score", score1);
        document.getElementById("scoreP").innerHTML = score1;
    } else if (document.querySelector("#toolId").children.length === 5) {
        localStorage.setItem("score2", score2);
        document.getElementById("scoreP").innerHTML = score2;
    }

    setTimeout(function() {
        document.querySelector("#scoreP").classList.remove("invisible");
        $(document).ready(function () {
            $("#scoreP").fadeIn("slow");

        });
    }, 2500);

}

//Rules Button
document.querySelector("#btn").addEventListener("click", function(){
   $("#ruleBox").fadeToggle();
});

//Clear Score Button
document.querySelector("#clearScore").addEventListener("click", function() {

    if (document.querySelector("#toolId").children.length === 3) {
    score1 = 0;
    document.getElementById("scoreP").innerHTML = 0;
    localStorage.setItem("score", 0);
} else if (document.querySelector("#toolId").children.length === 5) {
    score2 = 0;
    document.getElementById("scoreP").innerHTML = 0;
    localStorage.setItem("score2", 0);
    }

});
