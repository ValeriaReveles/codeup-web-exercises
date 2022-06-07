// // Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
// // Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
// //Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

var number;  //need to declare the variables before you can use it.
var i;

// Correct and better while solution from reading and looking at examples

while (true) { //If condition is true aka user entered an odd number between 1 and 50, "break" the cycle/loop of asking for a prompt. If user enters an even number, the loop will continue prompting for number.

    var number = prompt("Hello! Enter an odd number between 1 and 50.")

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


//Other possible working solution. Though not as clean and effective. Very repetitive. Work on cleaning code and making it easier to read.


// function userNumber (n){
//     return  n % 2 !== 0
// }
//
// function chosenNumber (n) {
//     return !isNaN(parseFloat(n));
// }
//
//
// let enterNumber = prompt("Hello there! Please enter an odd number between 1 and 50");
//
// for (var i = 1; i <= 50; i+=2){
//     if(i === enterNumber) {
//         console.log("Yikes! Skipping number: " + enterNumber);
//         continue;
//     }
//      console.log("Here's an odd number " + i);
//  }
//
// if(userNumber(enterNumber) && chosenNumber(enterNumber) && enterNumber >= 1 && enterNumber <= 50){
//     break;
// }