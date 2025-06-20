const apiKey = "98765dbe180b5078fae4d6cc897de4b7";
const url = "https://api.openweathermap.org/data/2.5/weather?&unit=metric&q=mumbai"

let searchcity = document.querySelector("input");
let searchbtn = document.querySelector(".searchbtn")

async function checkWeather(city){
    let response = await fetch(url + city + `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%" ;
    document.querySelector(".windspeed").innerHTML = data.wind.speed + "km/hr";
}

searchbtn.addEventListener("click",()=>{
    checkWeather(searchcity.value);
})
