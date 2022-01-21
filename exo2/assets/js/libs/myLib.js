/**
 *  Returns an integer . This integer is min <= randomNumber < max
 * @param {Number} min 
 * @param {Number} max 
 * @returns {Number}
 */

function randomInt(min, max) {
    // We can obtain a number between 0 and k, so if min is != 0,
    // we need to calc how much integers we can obtain
    let size = (min != 0) ? max - min : max;
    let randomNumber = Math.floor(Math.random() * size);
    // And we return an integer in the specified range
    return randomNumber + min;
}