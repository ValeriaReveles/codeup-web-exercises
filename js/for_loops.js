"use strict";

//7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70

//Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
//
function showMultiplicationTable (number){
    for(let i = 1; i <11; i++){ //could use i <=10 instead
        console.log(number + " x " + i + " = " + (number * i));
    }
}


//Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
   //can create a random function to use for all random number between min and max
    //can declare it inside the loop
}
//Notes on how instructor did it.
for(var i = 0; i < 10; i++) {
    let number = getRandomInt(20, 200); //let getRandomIt =  Math.floor(Math.random() * (200 - 20 + 1)) + 20;
    //if(getRandomInt% 2 === 0){
    //console.log(getRandomInt( + "!Nice, that is an even number."))
//}else {
    //console.log(getRandomInt + "! Odd number, cool!"));
    //}
//}
    let message = "";
    if(number % 2 === 0) {
        message = " is even";
    } else {
        message = " is odd";
    }

    console.log(number + message);

}


// //Create a for loop that uses console.log to create the output shown below.
// // 1
// // 22
// // 333
// // 4444
// // 55555
// // 666666
// // 7777777
// // 88888888
// // 999999999

var output;
for(var i = 1; i <= 9; i++) {
    output = "";
    for(var j = 1; j <= i; j++) {
        output += i;
    }
    console.log(output)
}
//Alternate: can use repeat to make it simple and avoid nesting and make it very simple.

//for (let i =1; i <= 9; i++){
    //let iAsString = i.toString();
    //console.log(i.toString().repeat(i));
//}



// //Create a for loop that uses console.log to create the output shown below.
for(var i = 100; i >= 0; i-=5) {
    console.log(i);
}

//
//
