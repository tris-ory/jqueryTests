// DOM Elements 
var startBtn = $('#start');
var validNumberSelected = $('#validNumber');
var resultDiv = $('#result');
var horseQuantitySelected = $('#horseQuantity');
var raceContainer = $('#race');

// Array who will contain the elements for each horse
var horsesElems = new Array();
// Array containing margin counters
var horsesMargin = new Array();
var numberOfHorses;
// Datas for the moves
var maxWidth;
var maxSpeed = 10;
var endOfGame = false;
var winner = "";
const colorsList = ['red', 'green', 'blue', 'purple', 'yellow'];

// Listeners
// When click on button that valid the number of horses
validNumberSelected.click(function () {
    // First, we clean the containe
    raceContainer.html('');
    numberOfHorses = horseQuantitySelected.val();
    console.log('number ' + numberOfHorses);
    let numberOfColors = colorsList.length;
    // If more than numberOfHorses div created, we need to have more ids than colors
    let idListTurn = 0;
    // Used for contain each new div
    // Now the race container is displayed
    raceContainer.css('display', 'initial');
    // We create all divs we need; each have an id, and 2 classes : horse and the bg-color
    for (let i = 1; i <= numberOfHorses; i++) {
        console.log('horse n° ' + i);
        // Current color is modulo numberOfColors
        let currentColor = colorsList[i % numberOfColors];
        // and id is same as the color class, but with idListTurn for being unique
        let currentId = currentColor + idListTurn;
        // Now we append a new div at the end of the container
        $("<div></div>").appendTo(raceContainer);
        // we put it into a newHorse
        let newHorse = raceContainer.children().last();
        // we modify classes and id of the div
        newHorse.addClass(['horse', currentColor]);
        newHorse.attr('id', currentId);
        // and finally, we insert an image into the div
        newHorse.html("<img src=\"assets/img/reiter-clipart-6.jpg\" alt=\"cheval " + currentId + "\" />");
        // If we have read all colors since last increment, we increment the counter
        if (i % numberOfColors == 0) {
            idListTurn++;
        }
    }
    setInitialValues();
    startBtn.css('display', 'initial');
});
// When we click on the button for launch the race
startBtn.click(function () {
    setInitialValues();
    while (!endOfGame) {
        moveRandomlyHorses();
    }
    defineWinners();
})

// Function that move all horses randomly each turn
function moveRandomlyHorses() {
    for (let i = 0; i < horsesElems.length; i++) {
        let randomSpeed = randomInt(1, maxSpeed);
        let currentMargin = horsesMargin[i] + randomSpeed;
        horsesElems[i].css('margin-left', currentMargin + 'px');
        horsesMargin[i] = currentMargin;
        if (currentMargin > maxWidth) {
            endOfGame = true;
        }
    }
}

// define msg for the winner(s)
function defineWinners() {
    let maxMove = 0;
    let msg = "Le vainqueur est : ";
    winner = "";
    for (let i = 0; i < horsesElems.length; i++) {
        let currentMove = horsesMargin[i];
        if (currentMove >= maxMove) {
            maxMove = currentMove;
            if (winner.length == 0) {
                winner = horsesElems[i].attr('id');
            } else {
                msg = "Les vainqueurs sont : ";
                winner += ", " + horsesElems[i].attr('id');
            }
        }
    }
    resultDiv.css('display', 'initial').html(msg + winner);
}


// Init horses array and get number of horses
function setInitialValues() {
    // Reset the arrays;
    horsesElems = new Array();
    horsesMargin = new Array();
    // Add each div with the horse class in the array
    $('.horse').each(function () {
        // get the item with the current id
        let current = $('#' + this.id);
        // and put it in the array
        horsesElems.push(current);
        // Restore the margin
        current.css('margin-left', 0);
        // and put the good value in the margin array
        horsesMargin.push(0);
    });
    numberOfHorses = horsesElems.length;
    // Mask the result
    resultDiv.css('display', 'none').html('');
    winner = "";
    endOfGame = false;
    // reset the length of the race
    maxWidth = $(window).width() - horsesElems[0].width();
}