var scores = [24, 32, 17];
var arrayLength = scores.length;
var roundNumber = 0;
var message = '';
var i;

// Loop the items in the Array
for ( i = 0; i < arrayLength; i++ ) {
    roundNumber = (i + 1);
    message += 'Round ' + roundNumber + ': ';
    message += scores[i] + '<br/>';
}

document.querySelector('.section_1').innerHTML = message;

//While Loops

var i = 1;
var msg = '';
const amount = prompt("What number would you like to times?");

while ( i < 10 ) {
    msg += i + ' x ' + amount+' = ' + (i * amount) + '<br/>';
    i++;
}

document.querySelector('.section_2').innerHTML = msg;

// for loop

function getRandomNumber(upper) {
    return Math.floor( Math.random() * upper ) + 1;
}
for( let i = 0; i< 10; i++ ) {
    document.querySelector('.section_3').innerHTML = `Your random number is ${getRandomNumber(10)}`;
}

added