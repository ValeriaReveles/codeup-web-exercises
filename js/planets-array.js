
// let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']; //Need it outside of function if want to be able to recall it globally.

(function(){
    "use strict";

    let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']; //declare inside function in order to be able to recall it within function, but will not be able to recall var outside of function.

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    planets.unshift('The Sun');
    console.log('Adding "The Sun" to the beginning of the planets array.');
    console.log(planets);
    //
    planets.push('Pluto');
    console.log('Adding "Pluto" to the end of the planets array.');
    console.log(planets);
    //
    planets.shift();
    console.log('Removing "The Sun" from the beginning of the planets array.');
    console.log(planets);
    //
    planets.pop();
    console.log('Removing "Pluto" from the end of the planets array.');
    console.log(planets);
    //
    var index = planets.indexOf('Earth');
    console.log('Finding and logging the index of "Earth" in the planets array.' + ' The index is: ' + index);
    //


    console.log("Reversing the order of the planets array. New order of array is: ");
    planets.reverse();
    console.log(planets);
    //

    console.log("Sorting the planets array. New array order is: ");
    planets.sort();
    console.log(planets);

})();