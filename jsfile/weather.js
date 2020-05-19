const API_KEY = "035b3d5e47b23e1082d7f7d02554812a";
const weather = document.querySelector(".weather");
const temp = weather.querySelector(".temp");
const place = weather.querySelector(".place");
const COORDS = 'coords';

function paintWeather(weatherJson){
    temp.innerHTML=`temp : ${weatherJson.main.temp}`;
    place.innerHTML=`place : ${weatherJson.name}`;
}

function getWeather(lat, lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    }).then(function(json){
        paintWeather(json);
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));

}

function handleGeoSucces(position){
    const longitude = position.coords.longitude;
    const latitude = position.coords.latitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoError(){
    console.log("can not access geo location"); 
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null){
        askForCoords();
    }else{
        const parseCoords = JSON.parse(loadedCords);
        getWeather(parseCoords.latitude,parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}


init();