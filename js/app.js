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

while ( i < 10 ) {
    msg += i + ' x 5 = ' + (i * 5) + '<br/>';
    i++;
}

document.querySelector('.section_2').innerHTML = msg;