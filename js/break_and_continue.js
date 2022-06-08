// // Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
// // Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
// //Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

var number;
var i;


// Correct and better while solution reviewed with instructor:

while (true) {
    var number = prompt("Hello! Please enter an odd number between 1 and 50: ")

    if (number % 2 !== 0 && number >= 1 && number <= 50)
        break;
}

for (i = 1; i <= 50; i++) {
    if (number == i) {
        console.log("Yikes! Skipping " + number);
        continue;
    }

    else if ((i % 2) == 0) {
        continue;
    }
    console.log("Here is an odd number: " + i);

}

