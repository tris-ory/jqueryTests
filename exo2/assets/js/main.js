// DOM Elements 
var startBtn = $('#start');
var resetBtn = $('#reset');
var resultDiv = $('#result');
var horsesElems = new Array();
// Array containing margin counters
var horsesMargin = new Array();
var numberOfHorses;
// Datas for the moves
var maxWidth = $(window).width();
var maxSpeed = 10;
var endOfGame = false;
var winner = "";
// Listeners
startBtn.click(function(){
    while(!endOfGame){
        moveRandomHorse();
    }
    resultDiv.css('display', 'initial').html('Le gagnant est : ' + winner);
})

resetBtn.click(function(){
    setInitialValue();
})

// Function that select a random horse an move it from a random length between 0 and maxSpeed px
// If the horse move completely out of window, it's the winner
function moveRandomHorse() {
    // The horse we move datas
    let horseNumber = randomInt(0, numberOfHorses);
    let currentHorse = horsesElems[horseNumber];
    let currentMargin = horsesMargin[horseNumber];
    // Move between 1 and maxSpeed
    let speed = randomInt(1, maxSpeed + 1);
    currentMargin += speed;
    if (currentMargin > maxWidth) {
        currentMargin = maxWidth;
        winner = currentHorse.attr('id');
        endOfGame = true;
    }
    horsesMargin[horseNumber] = currentMargin;
    currentHorse.css('margin-left', currentMargin + 'px');
}
// Init horses array and get number of horses
function setInitialValue(){
    $('.horse').each(function () {
        let current = $('#' + this.id);
        horsesElems.push(current);
        current.css('margin-left',0);
        horsesMargin.push(0);
    });
    numberOfHorses = horsesElems.length;
    resultDiv.css('display', 'none').html('');
}
setInitialValue();