// Declaring the variables
let lon,lat;
let temperature = document.querySelectorAll(".temp");
let summary = document.querySelectorAll(".summary");
let loc = document.querySelector(".location");
let icon = document.querySelectorAll(".icon");
window.addEventListener("load", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position);
            lon = position.coords.longitude;
            lat = position.coords.latitude;
            const api ="1d1f75509a4a8cfc3fc56162802f7b91";
            // API URL
            const base =
                `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=1d1f75509a4a8cfc3fc56162802f7b91&units=imperial`;
            // Calling the API
            fetch(base)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    for (let i = 0; i < 5; i++) {
                        temperature[i].textContent = data.daily[i].temp.day + " F";
                        summary[i].textContent = data.daily[i].weather[0].description;
                        // loc.textContent = data.name + "," + data.sys.country;
                        let icon1 = data.daily[i].weather[0].icon;
                        icon[i].innerHTML =
                            `<img src=" http://openweathermap.org/img/wn/${icon1}.png" style= 'height:10rem'/>`;
                    }
                    })
})
        }});
