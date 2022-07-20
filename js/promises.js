"use strict";
document.addEventListener("DOMContentLoaded", function () {
    (async function() {

        //instead of putting it in fetch command, put all your properties in a variable you can call into your function. The fetch
        //request will be inside the function.

        const options = {
            method: 'GET',
            headers: {
                "Authorization": "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"
            }
        };

        // basic fetch example with catch
        // fetch('https://api.github.com/users', options)
        //     .then(function(response) {
        //         // if the response is not successful, force it to go to catch
        //         if(response.status !== 200) {
        //             return Promise.reject("Status was " +response.status);
        //         }
        //         return response.json();
        //     }).then(function(users) {
        //       console.log(users);
        // }).catch(function(error) {
        //     console.log(error);
        //     console.log("ERROR " + error);
        // }).finally(function() {
        //   console.log("This always executes.");
        // });


        //simplified function to fetch API and data wanted, in this case users.

        function getGithubUsernames() {
            return fetch('https://api.github.com/users', options)
                .then(response => response.json())
                .catch(function(error) {
                    console.warn("ERROR: " + error);
                });
        }


        //created a separate function that takes in a username as a parameter and displays the usernames last commit and other info.
        function getGithubUsernameLastCommit(username) {
            return fetch(`https://api.github.com/users/${username}/events/public`, options)
                .then(response => response.json())
                .catch(function(error) {
                    console.warn("ERROR: " + error);
                });
        }



    //put my functions into a constant in order to call them.

        const users = await getGithubUsernames();

        const username = await getGithubUsernameLastCommit('ValeriaReveles');

    //consoled logged them to see the outcome and if the worked.
        console.log(username);

        console.log(users);


    //Part 2: create your own promise.




        // *Promises always have a resolve and reject parameters and outcomes to include pending for promises that are still loading.

        // show an example of
        // mess with the url. why doesn't catch get called? what does get caught?
        //https://stackoverflow.com/questions/38235715/fetch-reject-promise-and-catch-the-error-if-status-is-not-ok
        // Fetch promises only reject with a TypeError when a network error occurs. Since 4xx and 5xx responses aren't network errors, there's nothing to catch. You'll need to throw an error yourself to use Promise#catch.

        // how to handle comm failures like 404 in a cleaner way?

        // we have covered the 2 ways to work with async functions like fetch:
        // 1. in the callback function
        // 2. await
        // which do you prefer?


        // when would you write your own custom Promise?

    })();
});
