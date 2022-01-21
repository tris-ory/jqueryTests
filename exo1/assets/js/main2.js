// Convert values
const euroToDollar = 1.14;
const dollarToEuro = .88;
const euroToCHF = 1.04;
const CHFToEuro = .96;
const dollarToCHF = 0.91;
const CHFToDollar = 1.09;
// DOM Elements
var fromCurrencySelector = $("#fromCurrency");
var toCurrencySelector = $("#toCurrency");
var fromValue = $('#fromConvert');
var toValue = $('#toConvert');
// Listeners
// On select changes
$("select").change(function () {
    let from = fromCurrencySelector.val();
    let to = toCurrencySelector.val();
    // Reset the result field
    toValue.val('');
    if (from == to) {
        if (to == "dollar") {
            fromCurrencySelector.val("euro");
        } else {
            toCurrencySelector.val("dollar");
        }
    }
});
// Button clicked
$('#btnConvert').click(function(){
    let from = fromCurrencySelector.val();
    let to = toCurrencySelector.val();
    let valueContent = fromValue.val();
    let result;
    if (from == "euro") {
        if (to == "dollar") {
            result =  (valueContent * euroToDollar).toFixed(2);
        }
        // If not --> dollar, it's --> chf because of select.change listener 
        else {
            result =   (valueContent * euroToCHF).toFixed(2);
        }
    }
    else if (from == "dollar") {
        if (to == "euro") {
            result =   (valueContent * dollarToEuro).toFixed(2);
        }
        // If not --> euro, it's --> chf because of select.change listener     
         else {
            result =   (valueContent * dollarToCHF).toFixed(2);
        }
    }
    else {
        if (to == "euro") {
            console.log("euro");
            result =   (valueContent * CHFToEuro).toFixed(2);
        }
        // If not --> euro, it's --> chf because of select.change listener     
         else {
            console.log("dollar");
            result =   (valueContent * CHFToDollar).toFixed(2);
        }
    }
    $("#toConvert").val(result);
});