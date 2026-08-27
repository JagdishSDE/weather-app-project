# 🌤️ Weather App

A responsive weather application built with **HTML, CSS, and JavaScript** that allows users to search for a city and view its current weather conditions through a clean and interactive interface.

The project focuses on practicing **JavaScript, DOM manipulation, API integration, asynchronous programming, and responsive UI development**.

---

## 🌦️ Overview

The Weather App allows users to enter the name of a city and retrieve its current weather information using a weather API.

The application takes the user's input, sends a request to the weather API, processes the returned JSON data, and dynamically updates the interface with the relevant weather information.

It was built as a practical project to understand how a frontend application communicates with an external API and displays real-time data to users.

---

## ✨ Features

- 🌍 Search weather by city name
- 🌡️ Display current temperature
- ☁️ Display current weather conditions
- 💧 Display humidity
- 💨 Display wind information
- 📍 City-based weather lookup
- 🔄 Dynamic weather data updates
- ⚡ Asynchronous API requests using JavaScript
- 📱 Responsive interface
- 🎨 Weather-focused visual design
- 🧩 Dynamic DOM manipulation
- ❌ Basic handling of invalid or unsuccessful searches

---

## 🛠️ Technologies Used

### Frontend

- **HTML5** — Page structure and semantic markup
- **CSS3** — Styling, layout, responsiveness, and visual effects
- **JavaScript (ES6+)** — Application logic, API requests, and DOM manipulation

### API

- **OpenWeather API** — Weather data source

---

## 🧠 What I Practiced

This project helped me strengthen several important frontend concepts.

### JavaScript

- Variables and functions
- DOM selection
- Event listeners
- Conditional logic
- Template literals
- Objects and JSON
- Asynchronous JavaScript
- `fetch()`
- Promises
- `async/await`
- Error handling

### DOM Manipulation

The application dynamically updates the page based on the API response rather than relying on static weather information.

For example, when a user searches for a city, JavaScript updates the relevant elements with the returned:

- Temperature
- Weather condition
- Humidity
- Wind information
- Location

---

## 🔌 API Integration

The application communicates with the **OpenWeather API** to retrieve weather information.

The general flow is:

text



User enters city
        ↓
JavaScript captures input
        ↓
API request is sent
        ↓
Weather API returns JSON
        ↓
JavaScript processes the response
        ↓
DOM is updated
        ↓
Weather information is displayed


🏗️ Project Structure


Weather-App/
│
├── index.html
├── style.css
├── script.js
│
├── images/
│   └── ...
│
└── README.md


🎨 UI & Design
The interface is designed around a weather-oriented visual theme rather than a generic dashboard.
The design uses a combination of:
Light blue tones
Weather-related visuals
Clear typography
Simple information hierarchy
Responsive layouts
Visual feedback based on weather information
The goal is to keep the interface visually engaging while maintaining readability and usability.


📱 Responsive Design
The application is designed to work across different screen sizes.
The layout adapts to:
💻 Desktop screens
💻 Laptops
📱 Mobile devices
📟 Smaller tablet-sized screens
CSS media queries and flexible layouts are used where required to maintain usability across different viewport sizes.


API Configuration
This project uses the OpenWeather API.
If you are running your own copy of the project, you may need to provide your own API key depending on how the current implementation is configured.
A typical API request follows the general pattern:

🔮 Future Improvements
Possible improvements for future versions include:
📍 Automatic location detection
📅 Multi-day weather forecasts
⏰ Hourly weather forecasts
🌅 Sunrise and sunset information
🌙 Improved day/night weather visuals
🌧️ Weather-based animations
🌡️ Celsius/Fahrenheit switching
🔎 Improved search suggestions
📊 More detailed weather statistics
📱 Further mobile UI improvements


👨‍💻 Author
Jagdish Bhatt
Computer Science & Engineering graduate interested in:
Software Development
C++
Data Structures & Algorithms
Web Development
Artificial Intelligence
Machine Learning
Applied Technology
