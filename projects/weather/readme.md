# Weather App

A simple weather application built with HTML, CSS, and JavaScript. It allows users to search for any city and view current weather information such as temperature, feels-like temperature, weather condition, humidity, pressure, wind speed, sunrise, and sunset.

Live Demo: https://web-developent-nlhb.vercel.app

## Project Overview

This project is designed to be easy to understand and lightweight. The main goal is to show how a basic weather app can be created using simple front-end web technologies.

## Files Used

For simplicity, the project mainly uses:

- index.html - page structure
- style.css - styling and layout
- script.js - weather data handling and UI updates
- photos/ - background and image assets

## Screenshot

<p align="center"><img src="photos/project photo.png" alt="Project Screenshot" style="border-radius:10px; max-width:100%; height:auto;"></p>

## API Folder Note

The `api` folder is only used to keep the weather API key secure. It acts as a small protected backend endpoint so the API key is not exposed directly in the frontend files.

## Features

- Search weather by city name
- Display current temperature and weather condition
- Show extra details like humidity, pressure, and wind speed
- Show sunrise and sunset time
- Mobile responsive

## How It Works

1. The user enters a city name.
2. The app sends a request to the weather API.
3. The received data is displayed on the webpage.

## Notes

- The app is intentionally kept simple and beginner-friendly.
- The main frontend logic is centered around the HTML, CSS, JavaScript, and photos folder.
- The API folder is only there for security and API key protection.

This project is mobile responsive and works well on phones and tablets.

## Contributing

- Contributions are welcome — improvements, bug fixes, UI tweaks, or translations.
- To contribute: fork the repo, create a branch, make changes, and open a pull request.
- Prefer opening an issue first if you're unsure about a change.

## Found a mistake?

If you spot an error (typo, incorrect data, or layout issue), please open an issue or submit a pull request with the fix. Small edits are appreciated.

---
## Simple version 
- if you do not want to secure the api and using it on your own system or while production no need of api folder and use this script.js

- replace

```bash 
let data = await fetch(`/api/weather?city=${city}`)
```

- by 

```bash
let api = "YOUR WEARTHER API KEY"
let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`)
```

---
