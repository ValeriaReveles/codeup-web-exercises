"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(color) {
    //let message = "";
    //color = color.toLowerCase(); //to force the word in a lower case or upper fed. Controls how user inputs data
    if (color === 'blue') {
        return 'blue' + " is the color of the sky.";
        //message = "Blue is the color of the sky
    }else if (color === 'red'){
        return 'red' + " is the color of strawberries.";
    }else if (color === 'pink'){
        return 'pink' + " is the color of my hair.";
    }else {
        return color + " Sorry, I'll have to look up that color!"
    }
    //return message
}

console.log(analyzeColor('blue'));
console.log(analyzeColor('red'));
console.log(analyzeColor('pink'));



// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];


/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
//can add function to variable then add that variable to the function on the log
console.log(analyzeColor(randomColor));



/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
//can add console log to see what the color is console.log("the color is" + color)
function analyzeColor(color) {
    switch (color) {
        case 'blue':
            return 'blue' + " is the color of the sky.";
            break;
        case 'red' :
            return 'red' + " is the color of strawberries.";
            break;
        case 'pink' :
            return 'pink' + " is the color of my hair!"
            break; //if you don't add the break, the cases and alerts will just keep going
        default:
            return color + " BOO!";
            break;
    }
}


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

let colorQuestion = prompt("Welcome! Please input a color: ");
console.log("The user entered: " + analyzeColor(colorQuestion));
alert(analyzeColor(colorQuestion));
//alert(favoriteColor); do not need the extra variable if you just put the colorQuestion variable directly to the alert
//can do it like alert(analyzeColor(colorQuestion)

//alert is a function in itself. return gives you the output you want in the data type you want


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// function calculateTotal(luckyNumber, totalAmount) {
//     if (luckyNumber === 0) {
//         return totalAmount;
//     }else if (luckyNumber === 1){
//         return totalAmount - (totalAmount * .10);
//     }else if (luckyNumber === 2){
//         return totalAmount - (totalAmount * .25);
//     }else if (luckyNumber === 3){
//         return totalAmount - (totalAmount * .35);
//     }else if (luckyNumber === 4){
//         return totalAmount - (totalAmount * .50);
//     }else if (luckyNumber === 5){
//         return 0 + "You get everything for FREE!";
//     }
//
// }
//switch case function more appropriate for this problem it seems, but can need to better use math on functions


function calculateTotal(luckyNumber, totalAmount) {
    switch (luckyNumber) {
        case 0:
            return "Sorry! No discount awarded :("
            break;
        case 1:
            return "Congrats! You get a discount of $" + (totalAmount * .10) + "!" + " You're new total is $" + (totalAmount-(totalAmount * .10));
            break;
        case 2:
            return "Congrats! You get a discount of $" + (totalAmount * .25) + "!" + " You're new total is $" + (totalAmount-(totalAmount * .25));
            break;
        case 3:
            return "Congrats! You get a discount of $" + (totalAmount * .35) + "!" + " You're new total is $" + (totalAmount-(totalAmount * .35));
        case 4:
            return "Congrats! You get a discount of $" + (totalAmount * .50) + "!" + " You're new total is $" + (totalAmount-(totalAmount * .50));
        case 5:
            return "Congrats! You get a discount of $" + (totalAmount * 1) + "!" + " You're new total is $" + (totalAmount-(totalAmount * 1));
        default:
            return "Sorry! Better luck next time!";
            break;
    }
}


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

let userTotal = prompt ("Hello! Please enter your total bill!");

alert("Wow! Today you drew a lucky number of " + luckyNumber + " your total today was $:" + userTotal + ". That means you owe us " + calculateTotal(luckyNumber, userTotal));


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information //lets me know not to console.log it(??)
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions? //can wrap it all as a giant function instead of making another one
 * HINT: The way we prompt for a value could be improved
 */

// the following line will show the OK/CANCEL confirm dialog
// let enterNumber = prompt('Would you like to enter a number?');
// let confirmed = enterNumber == true;
// console.log("User input:");
// console.log(confirmed); // will be either true or false
// if ()
// let userInput = prompt("Please enter a number.")
// console.log('The user entered: ' + userInput);

var enterNumber = confirm("Would you like to enter a number?");//can use confirm instead of prompt to give me a boolean value of true or false instead of asking for prompt and then asking to confirm.

function numberGame () {
    if (enterNumber) {
        //let userNum = instructor used isNaN with Number instead of parseFloat
        var userNumber = parseFloat(prompt("Please enter a number: "));
        if (isNaN(userNumber)) {
            alert("Sorry that is not a number. Try again");
        } else {
            if (userNumber % 2 === 0) {
                alert("Your number is even!");
            } else {
                alert("Your number is odd!");
            }
            if (userNumber >= 0) { //include equal sign since zero is a positive integer
                alert("Your number is a positive one!");
            } else {
                alert("Your number is a negative one!");
            }
            alert(userNumber + 100 + " this is what your number would be when I add 100 to it.");
        }
    } else {
        alert("Maybe next time!");

    }
}



