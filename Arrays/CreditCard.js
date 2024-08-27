// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

    var network = '';
    var slicedDigits = cardNumber.slice(0,2);
    
    if((slicedDigits === '34' || slicedDigits === '37') && (cardNumber.length === 15)) {

       network = 'American Express';

    } else if((slicedDigits === '38' || slicedDigits === '39') && (cardNumber.length === 14)) {
        
        network = "Diner's Club";

    } else if((slicedDigits.slice(0,1) === '4') && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19) ){
     
          network = "Visa";

    } else if((slicedDigits === '51' || slicedDigits === '52' || slicedDigits === '53' || slicedDigits === '54' || slicedDigits === '55') && (cardNumber.length === 16)) {

          network = 'MasterCard';
    } else if(isDiscover(cardNumber)) {
        network = 'Discover';
    } else if(isMaestro(cardNumber)) {
        network = 'Maestro';
    }
    return network;
};


var isDiscover = function(cardNumber) {
    var prefixArr = ['644','645','646','647','648'];
    var str = cardNumber.slice(0,4);
    if(cardNumber.length === 16 || cardNumber.length === 19) {
        if((prefixArr.includes(str.slice(0,3))) || (str.slice(0,2) === '65') || (str === '6011')) {
            return true;
        }
    } return false;
}

var isMaestro = function(cardNumber) {
    var prefixArr = ['5018','5020','5038','6304'];
    var str = cardNumber.slice(0,4);
    if(cardNumber.length >= 12 && cardNumber.length <= 19) {
        if(prefixArr.includes(str)) {
            return true;
        }
    } return false;
}

detectNetwork('5412345678901234');