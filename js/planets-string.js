(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split("|");

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     *
     *
     * Instructor did the following:
     *
     */

    // var planetsArray1 = planetsArray.join(" \n ");
    // console.log(planetsArray1); //shows result in the javascript console.

    //

    let breakPlanets = planetsArray.join("<br>");
    console.log(breakPlanets);

    //bonus:
    // let newPlanets = planetsArray.join('<ul><li>' +
    //     '</li>' + '<li></li>' + '<li></li>');
//add something to start and something at the end.
    document.write('<ul><li>' + planetsArray.join('</li><li>') + '</li></ul>');


})();
