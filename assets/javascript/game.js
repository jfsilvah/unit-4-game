window.onload = function () {
    reset();
    $("button").on("click", countClick);
};

var images = ["assets/images/bastos.jpg", "assets/images/oros.jpg", "assets/images/espadas.jpg", "assets/images/copas.jpg"];
var buttonValues = [];
var score = 0;
var wins = 0;
var looses = 0;
var randomTotal;

function shuffleArray(arr) {
    var position = arr.length;
    var tempValue;
    var randomPos;
    while (position > 0) {
        
        randomPos = Math.floor(Math.random() * position);
        position = position - 1;
        tempValue = arr[position];
        arr[position] = arr[randomPos];
        arr[randomPos] = tempValue;
    }
    return arr;
};

function randomValues() {
    randomTotal = Math.floor(Math.random() * 102) + 19;
    $("#result").text(randomTotal);
    var tempValue;
    var valueExist = false;
    buttonValues = [];
    for(var i = 0;i<images.length;i++){
        tempValue = Math.floor(Math.random() * 12) + 1;
        valueExist = false;
        //logic to avoid same value in different positions
        for(var j=0;j<buttonValues.length;j++){
            if (buttonValues[j] === tempValue){
                valueExist = true;
            }
        }
        if (valueExist === false){
            buttonValues.push(tempValue);
        }
        else{
            i--;
        }
    }
    images = shuffleArray(images);
    console.log(buttonValues);
}

function putImages() {
    for (var i = 0; i < images.length; i++) {
        console.log(images[i]);
        $("#button"+(i+1)).css("background","url(\""+images[i]+"\")");
        $("#button"+(i+1)).css("background-repeat","no-repeat");
        $("#button"+(i+1)).css("background-position","50%");
        $("#button"+(i+1)).css("background-size","contain");
        $("#button"+(i+1)).css("background-color","white");
    }
}

function countClick(){
    score = score + buttonValues[this.id.replace("button","")-1];
    $("#scoreCount").text(score);
    $("#message").html("");

    if (score > randomTotal){
        looses++;
        $("#loserScore").text(looses);
        $("#message").text("You Lose !!!");
        reset();
    }
    else if (score === randomTotal){
            wins++;
            $("#winnerScore").text(wins);
            $("#message").text("You Win !!!");
            reset();
    }
}

function reset() {
    randomValues();
    putImages();
    score = 0;
    $("#scoreCount").text(score);
}


