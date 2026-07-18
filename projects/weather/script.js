let input = document.getElementById("input")
let searchbtn = document.getElementsByClassName("searchbtn")[0]
let date = document.getElementsByClassName("date")[0]
let cityName = document.getElementsByClassName("city")[0]
let temp = document.getElementsByClassName("temp")[0]
let feelslike = document.getElementsByClassName("feelslike")[0]
let weather = document.getElementsByClassName("weather")[0]
let weathericon = document.getElementsByClassName("weathericon")[0]
let maxtemp = document.getElementsByClassName("maxtempinnerdata")[0]
let mintemp = document.getElementsByClassName("mintempinnerdata")[0]
let wind = document.getElementsByClassName("windinnerdata")[0]
let pressure = document.getElementsByClassName("pressureinnerdata")[0]
let humidity = document.getElementsByClassName("humidityinnerdata")[0]
let sunrise = document.getElementsByClassName("sunriseinnerdata")[0]
let sunset = document.getElementsByClassName("sunsetinnerdata")[0]

const icons = {
    Clear: "☀️",
    Clouds: "☁️",
    Rain: "🌧",
    Drizzle: "🌦",
    Thunderstorm: "⛈",
    Snow: "❄️",
    Mist: "🌫",
    Smoke: "🌫",
    Haze: "🌫",
    Dust: "🌫",
    Sand: "🌪",
    Ash: "🌋",
    Squall: "🌬",
    Tornado: "🌪",
    Fog: "🌁"
}

let city = "jaipur"

const getdata = async (city) => {
    let data = await fetch(`/api/weather?city=${city}`)
    let weatherdata = await data.json()

    // filling fetched data in html
    const windspeed = (weatherdata.wind.speed * 3.6).toFixed(2)
    const pressuredata = (weatherdata.main.pressure / 1013.25).toFixed(2)

    date.innerHTML = today()
    cityName.innerHTML = weatherdata.name
    temp.innerHTML = `${weatherdata.main.temp} °C`
    feelslike.innerHTML = `Feels like ${weatherdata.main.feels_like} °C`
    weather.innerHTML = weatherdata.weather[0].main
    maxtemp.innerHTML = `${weatherdata.main.temp_max} °C`
    mintemp.innerHTML = `${weatherdata.main.temp_min} °C`
    wind.innerHTML = `${windspeed} Km/h`
    pressure.innerHTML = `${pressuredata} atm`
    humidity.innerHTML = `${weatherdata.main.humidity}%`
    sunrise.innerHTML = timechanger(weatherdata.sys.sunrise)
    sunset.innerHTML = timechanger(weatherdata.sys.sunset)
    weathericon.innerHTML = iconchanger(weatherdata.weather[0].main)
}

const today = () => {
    const today = new Date();

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];

    const day = days[today.getDay()];
    const dates = today.getDate();
    const month = months[today.getMonth() + 1];
    return (`${day} , ${dates} ${month}`);
}

const iconchanger = (weather) => {
    return icons[weather] || "❓";
}

const timechanger = (unix) => {
    const time = new Date(unix * 1000)
    return time.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })
}

input.addEventListener("change", () => {
    city = input.value

})

searchbtn.addEventListener("click", ()=>{
    getdata(city)
    input.value = ""
})

getdata(city)

