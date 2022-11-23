const API_coord = "http://api.openweathermap.org/geo/1.0/direct?q={city name},{FR}&limit={limit}&appid={API_clef}"

const API_villes = "https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API_clef}"

const API_clef = "7a1f5b652559ed9287054e3d28a24ef6"

cityName("Toulouse")




function cityName(city_name) {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name},FR&appid=${API_clef}&units=metric`)
        .then(response => response.json())
        .then(function (response) {
            console.log(response.main.feels_like);
            console.log(response.main.temp_max);
            console.log(response.main.temp_min);
            console.log(response.main.humidity);
            console.log(response.wind.speed);
            console.log(response.wind.deg);
        })
}

let info ={
    
}