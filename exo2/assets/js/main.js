// DOM Elements 
var startBtn = $('#start');
var resultDiv = $('#result');
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
// Listeners
startBtn.click(function () {
    let winMsg = "";
    setInitialValues();
    // Initial game, one horse move randomly each turn. The first at the end wins
    // while (!endOfGame) {
    //     moveRandomHorse();
    // }
    // resultDiv.css('display', 'initial').html('Le gagnant est : ' + winner);
    // Second version
    while(!endOfGame){
        moveRandomlyHorses();
    }    
    if (winner.split(',').length > 1){
        
    }
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

function moveRandomlyHorses(){
    for(let i=0; i<horsesElems.length; i++){
        let randomSpeed = randomInt(1, maxSpeed);
        let currentMargin = horsesMargin[i] + randomSpeed;
        horsesElems[i].css('margin-left', currentMargin + 'px');
        horsesMargin[i]=currentMargin;
        if (currentMargin > maxWidth){
            endOfGame = true;
        }
    }
}

function defineWinners(){
    let maxMove = 0;
    winner = "";
    for(let i=0; i<horsesElems.length; i++){
        if(horsesMargin[i]>=maxMove){
            maxMove = currentMove;
            if (winner.length == 0){
                winner = horsesElems[i].attr('id');
            } else {
                winner += ", " + horsesElems[i].attr('id');
            }
        }
    }
    resultDiv.css('display', 'initial').html('Le gagnant est : ' + winner);
}
// Init horses array and get number of horses
function setInitialValues() {
    horsesElems = new Array();
    $('.horse').each(function () {
        let current = $('#' + this.id);
        horsesElems.push(current);
        current.css('margin-left', 0);
        horsesMargin.push(0);
    });
    numberOfHorses = horsesElems.length;
    resultDiv.css('display', 'none').html('');
    winner = "";
    endOfGame = false;
    maxWidth = $(window).width() - horsesElems[0].width();
}
// Launch game
setInitialValues();