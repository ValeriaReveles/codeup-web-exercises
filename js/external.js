console.log("Hello from external JavaScript");
alert("Welcome to my Website!");
//prompt("What is your favorite color, user?")
//can add variable, or assign it to the left of the prompt
let userInput = prompt('What is your favorite color?');
console.log('The user entered: ' + userInput);
//shows you in the javascript console what the user input was
alert("Great, " + userInput + " is my favorite color too!");

//You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it),
// and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3,
// how much will you have to pay?

let pricePerDay = 3;
let numDaysRented = prompt(" Thank you for using Block and Busted- how many days would you like to rent your movie? ")
alert(" Awesome! You'll be renting the movie for " + numDaysRented + ". That means your total is " + (numDaysRented * pricePerDay) + "!");

// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

let googlePay = 400;
let amazonPay = 380;
let facebookPay = 350;

let totalGoogle = prompt("Hey, how many hours did you work for Google?");

let totalFacebook = prompt("Hey, how many hours did you work for Facebook?");

let totalAmazon = prompt("Hey, how many hours did you work for Amazon?");

let sumGoogle = googlePay * totalGoogle; //could create a variable to get the total?

alert("Cool! Here's what I'm seeing, you will need to earn $" + sumGoogle + "from working at Google. You'll earn $" + (totalAmazon * amazonPay) + "from Amazon. Finally, you'll earn $" + (totalFacebook * facebookPay) + "from Facebook. Good job! ")

// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

let timeInSchedule = confirm("Hey you got time in your schedule for this class?")

let roomInClass = confirm("Did the class have room for an additional student?")

alert("It is " + (roomInClass && timeInSchedule) + " that you can attend this class with what you told me.")

// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

let moreThanTwo = confirm("Do you have more than two items in your cart?")
let offerStillValid = confirm("Is the offer on the product still valid?")
let premiumMember = confirm("Are you a premium member?")

alert("Welcome to the Krusty Krab! Looks like you've brought me a cart. From what you told me it is " + (moreThanTwo && offerStillValid || premiumMember) + " that you get a cool Krusty hat and a discount. Don't tell Mr. Krabs !")




