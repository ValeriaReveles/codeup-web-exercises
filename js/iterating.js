(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var names = ["Jairo", "Alexis", "Valeria", "Dino"];
    console.log(names);

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log('There are ' + names.length + 'names in the array.');
    console.log('The first name is: ' + names[0]);
    console.log('The second name is: ' + names[1]);
    console.log('The third name is: ' + names[2]);
    console.log('The fourth name is: ' + names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for (let i = 0; i < names.length; i++){
        console.log("The name at index " + i + " is: " + names[i]);
    }

    //can use console.log(names[i]); instead of the log you have above.

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    names.forEach(function (name,index){
        console.log("Array names are as follows: [" + index + "] " + name);

        //easier if you just do console.log(name + " at index " + index); instead of what you have.
    })


    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */


    function firstName (first) {
       return console.log("The name in the first index of the array is: " + first[0]);
       //can do return arr[0] or first in your chosen array. For example: names[0]. Examples do not show console.log,instead show result.
    }
    firstName(names)

    function secondName (second) {
        return console.log("The name in the second index of the array is: " + second[2]);
    }
    secondName(names);

    function lastName (last) {
        return console.log("The name in the second index of the array is: " + last[3]);
        //return arr[arr.length -1]
    }
    lastName(names);



})();