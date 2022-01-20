// Convert values
const euroToDollar = 1.14;
const dollarToEuro = .88;
const euroToCHF = 1.04;
const CHFToEuro = .96;
const dollarToCHF = 0.91;
const CHFToDollar = 1.09;

// Get the value to convert and the convert direction
var inputValue;
var convertDirection;

// Listeners
// When I click on the button
$('#convert').click(function () {
    inputValue = $("#value").val();
    convertDirection = $("#convertDir").val();
    let converted;
    // Create the converted string according to the direction
    switch (convertDirection) {
        case "eurToDol":
            converted = convertVal(euroToDollar) + "&nbsp;$";
            break;
        case "dolToEur":
            converted = convertVal(dollarToEuro) + "&nbsp;€";
            break;
        case "eurToCHF":
            converted = convertVal(euroToCHF) + "&nbsp;CHF";
            break;
        case "CHFToEur":
            converted = convertVal(CHFToEuro) + "&nbsp;€";
            break;
        case "dolToCHF":
            converted = convertVal(dollarToCHF) + "&nbsp;CHF";
            break;
        case "CHFToDol":
            converted = convertVal(CHFToDollar) + "&nbsp;$";
            break;
        default:
            break;
    }
    
    // then put it into the result element
    $('#result').html(converted);
});


// Calculate value with the good rate and return a 2 decimals value
function convertVal(currencyRate){
    return (inputValue * currencyRate).toFixed(2);
}