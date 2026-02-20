let search = document.querySelector("#search");
let inp = document.querySelector("#inpbox");


search.addEventListener("click", function(){

    const city = inp.value.trim();
    if(city === ""){
        alert('please enter a valid city name')
        return;
    }else{
        function getWeather(){
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&appid=984008849a34a11a6213702a323af729&units=metric`)
.then((raw)=>raw.json())
.then((data)=>{
    console.log(data);
})

}
    }
    
   getWeather(); 
})
