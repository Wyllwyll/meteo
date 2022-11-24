//https://api.openweathermap.org/data/2.5/weather?q=${city_name},FR&appid=${API_clef}&units=metric



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const API_clef = "7a1f5b652559ed9287054e3d28a24ef6"


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
            affichage(info)
        })
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function affichage(info) {
    document.getElementById("icone").setAttribute("src", `http://openweathermap.org/img/wn/${info.icon}@2x.png`);
    document.getElementById("nomVille").textContent = info.name;
    document.getElementById("tempRessentie").textContent = info.feels_like;
    document.getElementById("tempMin").textContent = info.temp_min;
    document.getElementById("tempMax").textContent = info.temp_max;
    document.getElementById("humidity").textContent = info.humidity;
    document.getElementById("speed").textContent = info.speed;
    document.getElementById("deg").textContent = info.deg;
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



