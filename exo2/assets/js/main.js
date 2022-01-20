// Array containing margin counters and ids for each horse divs 
var horsesMargin = new Array();
var horsesIds = new Array();
// Datas for the moves
var maxWidth = $(window).width();
var maxSpeed = 10;
var endOfGame = false;
var winner = "";

// Function that select a random horse an move it from a random length between 0 and maxSpeed px
// If the horse move completely out of window, it's the winner
function moveRandomHorse() {
    // The horse we move datas
    let horseNumber = Math.floor(Math.random() * horsesMargin.length);
    let horseId = horsesIds[horseNumber];
    let horseMargin = horsesMargin[horseNumber];
    // The speed
    let horseSpeed = Math.floor(Math.random() * maxSpeed);
    // if horse move out of bounds, we retain it to the limit, else it move normally.
    horseMargin = ((horseMargin + horseSpeed) < maxWidth) ? horseMargin + horseSpeed : maxWidth;
    // We move the horse to the right
    $('#' + horseId).css('margin-left:' + horseMargin + 'px');
    // And if he goes out, he win. End of game...
    if (horseMargin >= maxWidth) {
        winner = horseId;
        endOfGame = true;
    }
}

// Function who get id of each div.horse and put it into an array and init margint to 0 together
function initHorsesArrays() {
    $('.horse').each(function () {
        horsesMargin.push(0);
        horsesIds.push($(this).attr('id'));
    });
}