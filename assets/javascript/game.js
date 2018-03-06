// Randomly generated target number
var targetNum = Math.floor(Math.random() * 101) + 19;
console.log(targetNum);

$("#goal").text(targetNum);

var crystals = $("#crystals");
var counter = 0;

var incrementOptions = [1, 3, 6, 9];

for (var i = 0; i < incrementOptions.length; i++) {
    var blueCrystal = $("<img>");
    // var greenCrystal = $("<img>");

    // adds class to image
    blueCrystal.addClass("crystal-image");
    // greenCrystal.addClass("crystal-image");

    // adds src and link to image
    blueCrystal.attr("src", "assets/images/blue.png", );
    // greenCrystal.attr("src", "assets/images/green.png", );

    // adds data attribute to image and 
    blueCrystal.attr("data-crystalvalue", incrementOptions[i]);
    // greenCrystal.attr("data-cryatalvalue", incrementOptions[i]);

    // adds crystal to the page
    crystals.append(blueCrystal);
    // crystals.append(greenCrystal);
}

crystals.on("click", ".crystal-image", function() {
    // grabs whatever value is stored within the data-crystalvalue attribute
    var crystalValue  = ($(this).attr("data-crystalvalue"));
    // converts that value to an integer
    crystalValue = parseInt(crystalValue);
    // increments the counter by number stored in crystalValue
    counter += crystalValue;

    alert("SCORE: " + counter);

    if (counter === targetNum) {
        alert("You did it! Nice job!");
    } else if (counter > targetNum){
        alert("Sorry! Try again!");
    }

});
