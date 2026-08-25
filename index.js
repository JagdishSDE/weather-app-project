const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userWeather = document.querySelector(".weather-container");

const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");


//initially what we required ->

let currentTab = userTab;  //currentTab = Old Tab
const API_KEY = "ef9b9a8298389c632e5840d6a4bf3658";
currentTab.classList.add("current-tab");

//another work is pending

//switchTab function =>it will take you to the tab you just clicked 
switchTab = (tab_you_just_clicked) =>{
    if(tab_you_just_clicked != currentTab){ //tab_you... = newtab
        //tab will interchange color based on what we clicked
        currentTab.classList.remove("current-tab");
        currentTab = tab_you_just_clicked;
        currentTab.classList.add("current-tab");

        if(!searchForm.classList.contains("active")){
            //is search tab invisible => make it visible
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else{
            //is your weather invisible => make it visible
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            //now we are in your weather tab => need to display weather also ,so lets check local 
            //storage first for coordinates,if we have saved them
            getfromSessionStorage();
        }
    }
}

userTab.addEventListener("click",()=>{
    //we just clicked on user tab now we will 
    // pass the clicked tab(usertab right now)=>switchtab function 
    // as i/p parameter

    switchTab(userTab);
});

searchTab.addEventListener("click",()=>{
    //we just clicked on search tab now we will 
    // pass the clicked tab(search tab right now)=>switchtab function 
    // as i/p parameter

    switchTab(searchTab);
});


getfromSessionStorage = () => {
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if(!localCoordinates){
        //if we do not get local coordinates
        grantAccessContainer.classList.add("active");
    }
    else{
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }
}

getfromSessionStorage();

fetchUserWeatherInfo = async(coordinates) =>{

    const {lat, lon} = coordinates;
    //make grantcontainer invisible 
    grantAccessContainer.classList.remove("active");
    //make loader visible
    loadingScreen.classList.add("active");

    //API CALL
    try{
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();

        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err){
    loadingScreen.classList.remove("active");

    userInfoContainer.classList.remove("active");

    alert("Unable to fetch weather data. Please try again.");

    console.log(err);
}

}

//fetch user mein jo response aya usko screen mein render kar lia
function renderWeatherInfo(weatherInfo) {

    // firstly, we have to fetch the elements

    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-temp]");
    const windspeed = document.querySelector("[data-windspeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");

    // fetch values from weatherInfo object and put it in UI elements

    cityName.innerText = weatherInfo?.name;
    countryIcon.src =
        `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;

    desc.innerText = weatherInfo?.weather?.[0]?.description;

    weatherIcon.src =
        `https://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;

    temp.innerText = `${weatherInfo?.main?.temp}°C`;
    windspeed.innerText = `${weatherInfo?.wind?.speed}m/s`;
    humidity.innerText = `${weatherInfo?.main?.humidity}%`;
    cloudiness.innerText = `${weatherInfo?.clouds?.all}%`;
}


getLocation = () =>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        alert("Unable to fetch weather data. Please try again.");

        console.log(err);
    }
}

showPosition = (position) =>{
    const userCoordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    }
    sessionStorage.setItem("user-coordinates",JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);
}

const grantAccessButton = document.querySelector("[data-grantAccess]");
grantAccessButton.addEventListener("click",getLocation);



//now here we are in search weather container -> we applied event listener on form input where we will enter the city
//for whiuch we are trying to find the weather then we will pass the value to function to find weather 
let searchInput = document.querySelector("[data-searchInput]");
searchForm.addEventListener("submit",(e)=>{
    e.preventDefault(); //defalut action to be removed
    if(searchInput.value === "") return;//if nothing is entered then please return 
    else{
        fetchSearchWeatherInfo(searchInput.value);
    }
})

fetchSearchWeatherInfo = async(cityName)=>{
    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");

    try{
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(error){
        //hw
        alert("info cannot be displayed");
        console.log("An Error Occured!")
    }
}







