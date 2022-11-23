//https://api.openweathermap.org/data/2.5/weather?q=${city_name},FR&appid=${API_clef}&units=metric



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const API_clef = "7a1f5b652559ed9287054e3d28a24ef6"

/* let info = {
    icon: "",
    name: "",
    feels_like: 0,
    temp_min: 0,
    temp_max: 0,
    humidity: 0,
    speed: 0,
    deg: 0,
} */

const inputButton = document.getElementById("recherche_button");
const inputEntry = document.getElementById("zone_recherche");
inputButton.addEventListener("click", () => {
    cityName(inputEntry.value);
})


const form = document.getElementById("recherche");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    cityName(inputEntry.value);
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function cityName(city_name) {
    console.log(city_name);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name},FR&appid=${API_clef}&units=metric`)
        .then(response => response.json())
        .then(function (response) {
            console.log(response);
            let info = {
                icon: response.weather[0].icon,
                name: city_name,
                feels_like: response.main.feels_like,
                temp_min: response.main.temp_min,
                temp_max: response.main.temp_max,
                humidity: response.main.humidity,
                speed: response.wind.speed,
                deg: response.wind.deg,
            }
            /* console.log(response.main.feels_like);
            console.log(response.main.temp_max);
            console.log(response.main.temp_min);
            console.log(response.main.humidity);
            console.log(response.wind.speed);
            console.log(response.wind.deg); 
            console.log(response.weather[0].icon);*/
            //changerIcone(response.weather[0].icon);

        })
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function changerIcone(iconeName) {
    let icone = document.getElementById("icone");
    icone.setAttribute("src", `http://openweathermap.org/img/wn/${iconeName}@2x.png`);
}


function affichage(info){
    changerIcone(info.icon)
    
}







