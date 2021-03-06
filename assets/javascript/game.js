
// Global Variables
var targetNum;
var wins = 0;
var losses = 0;
var crystals = $("#crystals");
var counter = 0;

function startGame() {

    $("#crystals").empty();
    // Randomly generated target number
    targetNum = Math.floor(Math.random() * 101) + 19;
    console.log(targetNum);
    $("#goal").text(targetNum);
   
    for (var i = 0; i < 4; i++) {

        // pulls a random num betweet 1 & 12 to assign to crystal
        var randomIncrement = [Math.floor(Math.random() * 11) + 1];
        console.log(randomIncrement);

        // creates image tag
        var blueCrystal = $("<img>");

        // adds class to image
        blueCrystal.addClass("crystal-image");

        // adds src and link to image
        blueCrystal.attr("src", "assets/images/blue.png");

        // adds data attribute to image and 
        blueCrystal.attr("data-crystalvalue", randomIncrement);

        // adds crystal to the page
        crystals.append(blueCrystal);
    }
}

startGame();

//Listens to any click events occuring on the DOM 
$(document).on("click", ".crystal-image", function() {
    // grabs whatever value is stored within the data-crystalvalue attribute
    var crystalValue  = ($(this).attr("data-crystalvalue"));
    // converts that value to an integer
    crystalValue = parseInt(crystalValue);
    // increments the counter by number stored in crystalValue
    counter += crystalValue;
    // Alerts player of their current score 
    alert("SCORE: " + counter);
    // displays win/loss message 
    if (counter === targetNum) {
        alert("You did it! Nice job!");
        // adds wins 
        wins++;
        console.log(wins);
        $("#wins").text(wins);
        counter = 0;
        startGame();
    } else if (counter > targetNum){
        alert("Sorry! Try again!");
        // adds losses
        losses++;
        console.log(losses);
        $("#losses").text(losses);
        counter = 0;
        startGame();
    }

});
