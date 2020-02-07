var crystals = {
    green: {
        name: "Green",
        value: 0
    },
    orange: {
        name: "Orange",
        value: 0
    },

    blue: {
        name: "Blue",
        value: 0
    },

    red: {
        name: "Red",
        value: 0
    }

}

var currentScore = 0
var targetScore = 0
var Wins = 0
var Losses = 0

function getrandom(min, max) {
return Math.floor(Math.random() * (max-min + 1))+min 
}

function startgame(){
    currentScore = 0
    targetScore = getrandom(20, 120)

    crystals.green.value = getrandom(1, 12)
    crystals.orange.value = getrandom(1, 12)
    crystals.blue.value = getrandom(1, 12)
    crystals.red.value = getrandom(1, 12)

$("#yourScore").text(currentScore)
$("#targetScore").text(targetScore) 
}


function checkWin(){
if(currentScore > targetScore){
    alert ("Sorry, you lost!")
    Losses++
    $("#lossCount").text(Losses)
    startgame() 
}
else if(currentScore === targetScore){
    alert ("Congratulations, You've won!")
    Wins++
    $("#winCount").text(Wins)
    startgame()
}
}

function addValues(clickedCrystal){
currentScore += clickedCrystal.value
$("#yourScore").text(currentScore)
checkWin()
}

startgame()

$("#green").click(function(){
    addValues(crystals.green)
})

$("#orange").click(function(){
    addValues(crystals.orange)
})

$("#blue").click(function(){
    addValues(crystals.blue)
})

$("#red").click(function(){
    addValues(crystals.red)
})