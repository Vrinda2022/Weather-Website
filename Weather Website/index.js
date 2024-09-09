var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var descrip = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apik = "51c9d93d98f5b4b8e6021c4cdc8cd420";

function conversion(val) {
    return (val - 273.15).toFixed(2);
}

btn.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
    .then(res => {
        return res.json();
    })
    .then(data => {

        var nameval = data['name'];
        var description = data['weather'][0]['description'];
        var temperature = data['main']['temp'];
        var windspeed = data['wind']['speed'];

        city.innerHTML = `Weather of <span>${nameval}</span>`;
        temp.innerHTML = `Temperature: <span>${conversion(temperature)} C</span>`;
        descrip.innerHTML = `Sky Condition: <span>${description}</span>`;
        wind.innerHTML = `Wind Speed: <span>${windspeed} km/h</span>`;
    })
    .catch(err => {
        alert('You entered the wrong city name or there was an error with the request');
    });
});
