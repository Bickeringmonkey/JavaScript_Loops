const tMinus = 10;
let message = 'Liftoff! 🚀';

for ( let i = tMinus; i >= 1; i--) {
    let status = prompt(`T-Minus ${i}... Continue? (Y/N)`);
    if ( status === '' || status.toLocaleLowerCase() === 'n') {
        message = 'Abort Launch!';
        break;
    }

}

alert(message);