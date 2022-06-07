function isOdd(n){
    return n % 2 !== 0;
}

function chosenNumber (n) {
    return !isNaN(parseFloat(n));
}

var randomUserNumber;

do {
    let randomUserNumber = prompt("Hello! Please pick an odd number between 1 and 50.");

    if(isOdd(randomUserNumber) && chosenNumber(randomUserNumber) && randomUserNumber >= 1 && randomUserNumber <= 50) {
        break;
    }
} while(true);

for(var i = 1; i <= 50; i+=2) {
    if(i === randomUserNumber) {
        console.log("Yikes! Skipping number: " + randomUserNumber);
        continue;
    }
    console.log("Here's an odd number " + i);
}
