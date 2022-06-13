(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    let person = {};
        person.firstName = "Valeria";
        person.lastName = "Reveles";

    // let person = name; Don't need it with the object format above

    console.log(person.firstName);
    console.log(person.lastName);


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function (){
        console.log (`Hello from ${person.firstName} ${person.lastName}!`); //can use string templates as opposed to typing all the string.
    };
    console.log(person.sayHello());


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320},
    ];

    shoppers.forEach(function (item,index){
        if(item.amount < 200){
            console.log("Sorry! No discount today. You only spent " + item.amount + "Your total is: " + item.amount);
        }else{
            console.log("Congrats " + item.name + "! You spent: " + index.amount + ". You get a 12% discount. Your new total is: " + (item.amount-(item.amount * .12)));
        }


        //instructor solution:
        //for (let i = 0; i < shoppers.length; i ++){
        //const shopper = shoppers[i];
        // console.log(shoppers[i]);
        //let outputString = `${shopper.name} ${shopper.amount}`;
        //if(shoppers.amount > 200){
        //let discount = shopper.amount * .12;  .toFixed limits the number of decimal spots
        //let afterDiscountAmount = shopper.amount - discount;
        //outputString += `${discount} ${afterDiscountAmount}`;
        //}
        //console.log(outputString);
        // }
    });


    //Worked, but instructions called for an if else and for each function to be used.
    // console.log("Sorry " + shoppers[0].name + "! You spent: " + shoppers[0].amount + ". You do not get a discount today. Your total is: " + shoppers[0].amount + ".");
    // console.log("Congrats! " + shoppers[1].name + " You get a 12% discount!" + " Your new total is: " + (shoppers[1].amount - (shoppers[1].amount * .12)) + "!");
    // console.log("Congrats! " + shoppers[2].name + " You get a 12% discount!" + " Your new total is: " + (shoppers[2].amount - (shoppers[2].amount * .12)) + "!");



    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array

     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */


    let books = [{
        title: " Narnia: ",
        author:{
            firstName: "CS",
            lastName: " Lewis"}},
        { title: " Code Name Villanelle: ",
          author:{
            firstName: "Luke",
            lastName: " Jennings"}},
        { title: " Neuromancer: ",
          author: {
            firstName: "William",
            lastName: " Gibbons"}},
        { title: " The Girl With The Dragon Tattoo: ",
          author: {
            firstName: "Stieg",
            lastName: " Larsson"}},
        { title: " Harry Potter and the Half-Blood Prince: ",
            author:{
                firstName: "JK",
                lastName: " Rowling"}}
    ];

     // console.log(books[3].title) // "The Salmon of Doubt"
     // console.log(books[3].author.firstName) // "Douglas"
     // console.log(books[3].author.lastName) // "Adams"



    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    books.forEach(function (item,index){
        console.log("Book #: " + (index + 1) + item.title + "\n" + "Author: " + item.author.firstName + item.author.lastName + "\n" + "---");


    });


    function createBook (title, author){
        console.log(title, author);
        let book = {};
        book.title = title;
        book.author = author;
        return book;
    }


    let myBook = createBook("Neuromancer", "William Gibbons");
    console.log(myBook);


    myBook = createBook("Codename: Villanelle", "Jennings");
    console.log(myBook);

    myBook = createBook("Twilight", "Katherine Gil");
    console.log(myBook);

    // function showBookInfo(bookObject){
    //     return:
    // }

})();
