function getWeather(){fetch("https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=984008849a34a11a6213702a323af729&units=metric")
.then((raw)=>raw.json())
.then((data)=>{
    console.log(data);
})

}


document.querySelector("#search").addEventListener("click", function(){
    getWeather();
})