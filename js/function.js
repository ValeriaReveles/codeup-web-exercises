(function() {

    "use strict";

    /**
     * TODO:
     * Create a function called 'sayHello' that takes a parameter 'name'.
     * When called, the function should return a message that says hello to the passed in name.
     *
     * Example
     * > sayHello("codeup") // returns "Hello, codeup!"
     */

    function sayHello(name) {
        return "Hello, " + name; //don't need to repeat yourself by adding an output if you can just use return "message" + (input)

    }

    /**
     * TODO:
     * Call the function 'sayHello' and pass your name as a string literal argument.
     * Store the result of the function call in a variable named 'helloMessage'.
     *
     * console.log 'helloMessage' to check your work
     */

//sayHello("Valeria"); //don't need because calling it with the helloMessage
    let helloMessage = sayHello("Valeria");

    console.log(helloMessage);


    /**
     * TODO:
     * Store your name as a string in a variable named 'myName', and pass that
     * variable to the 'sayHello' function. You should see the same output in the
     * console.
     */

    let myName = "Valeria";

    console.log(sayHello(myName)); //don't forget the semi-colon at the end of your instructions


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
    var random = Math.floor((Math.random() * 3) + 1);


    /**
     * TODO:
     * Create a function called 'isTwo' that takes a number as a parameter.
     * The function should return a boolean value based on whether or not the passed
     * number is the number 2.
     *
     * Example
     * > isTwo(1) // returns false
     * > isTwo(2) // returns true
     * > isTwo(3) // returns false
     *
     * Call the function 'isTwo' passing the variable 'random' as a argument.
     *
     * console.log *outside of the function* to check your work (you should see a
     * different result everytime you refresh the page if you are using the random
     * number)
     */

    function isTwo(x) {
        return x === 2; //use three = because it has same number and datatype

    }

    console.log("The random number is currently " + random);

    console.log(isTwo(random));


    /**
     * TODO:
     * Create a function named 'calculateTip' to calculate a tip on a bill at a
     * restaurant. The function should accept a tip percentage and the total of the
     * bill, and return the amount to tip
     *
     * Examples:
     * > calculateTip(0.20, 20) // returns 4
     * > calculateTip(0.25, 25.50) // returns 6.375
     * > calculateTip(0.15, 33.42) // returns 5.013
     */

    function calculateTip(tipPercentage, totalBill) {
        return tipPercentage * totalBill;

        //another way to go about it through variables
        // let tipInDollars = tipAmount * billTotal;
        //return tipInDollars;  can use return to directly return amount or by storing results on variable and returning variable. store in variable if plan on using it throughout code
    }


    /**
     * TODO:
     * Use prompt and alert in combination with your calculateTip function to
     * prompt the user for the bill total and a percentage they would like to tip,
     * then display the dollar amount they should tip
     */


    alert("Thank you for eating at the Krusty Krab! Follow the prompts to calculate your final bill! ")

    let customerTotal = prompt("Please enter your total bill amount: ")

    console.log("Customer entered: " + customerTotal);

    let customerTip = prompt("Please enter desired tip percent as a decimal: ");

    console.log("Customer entered: " + customerTip);

    let sumNum = customerTip * customerTotal;

    console.log(sumNum); //shows result in console

    alert("Tip is $" + sumNum + " !"); //only shows result as an alert and not on the console


    /**
     * TODO:
     * Create a function named `applyDiscount`. This function should accept a price
     * (before a discount is applied), and a discount percentage (a number between 0
     * and 1). It should return the result of applying the discount to the original
     * price.
     *
     * Example:
     * > var originalPrice = 100;
     * > var discountPercent = .2; // 20%
     * > applyDiscount(originalPrice, discountPercent) // 80
     *
     * > applyDiscount(45.99, 0.12) // 40.4712
     */

    function applyDiscount(originalPrice, discountAsDeci) {
        var totalDiscount = originalPrice * discountAsDeci;
        var finalPrice = originalPrice - totalDiscount;
        return finalPrice;

        //Need to figure out how to apply discount ranges to function. Attempt:
        // var discountRange = discountPercentage <= 1  returned value of 0 when added to function
        //Another possible solution was to add a prompt to enter discount and alert if amount exceeds 1.

    }


})();