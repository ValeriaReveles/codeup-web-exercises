do {
    let randomOddNumber = prompt("Hello! Please pick an odd number between 1 and 50.");

    if(isOdd(userNumber) && isNumeric(userNumber) && userNumber >= 1 && userNumber <= 50) {
        break;
    }
} while(true);