const api = {
    baseurl: ' http://api.weatherapi.com/v1/',
    key: 'f6d224ac973f45bfb7994942222305'
}

const box = document.querySelector('.input')
box.addEventListener('keypress', setWeather)

function setWeather(e) {
    if (e.keyCode == 13)
        getWeather(box.value)
}

function getWeather(query) {
    fetch(`${api.baseurl}current.json?key=${api.key}&q=${query}`)
        .then((weather) => {
            return weather.json()
        })
        .then(displayWiew)
}

function displayWiew(weather) {
    const city = document.querySelector('.city')
    city.innerHTML = `${weather.location.country}, ${weather.location.region}, ${weather.location.name}`

    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wendesday",
        "Thrusday",
        "Friday",
        "Saturday"
    ];

    const d  = new Date ();
    let day = weekday [d.getDay()];

    const date = document.querySelector('.date')
    date.innerHTML = `${weather.current.last_updated}, ${day}`

    const temp = document.querySelector('.temp')
    temp.innerHTML = `${weather.current.temp_c}<img src= "${weather.current.condition.icon}">`
}