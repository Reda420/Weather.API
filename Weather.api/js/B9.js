
function changeCity(city){

fetch(`http://api.weatherapi.com/v1/forecast.json?key=0957ebe292714ffa893112919221301&q=${city}&days=4`)
.then(response=>response.json()
).then(data=>{
    document.getElementById('location-header').innerText = data.location.name+' , '+data.location.country;
    
    document.getElementById('1-image-header').src= data.current.condition.icon.replace('//','http://');
    document.getElementById('1-header-Text').innerText = getDate(data.location.localtime_epoch);
    document.getElementById('1-temp-resp').innerText = data.current.temp_c+' °';
    document.getElementById('1-temp-text').innerText = data.current.condition.text;    
    document.getElementById('1-humidity-per').innerText = data.current.humidity+' %'; 

    document.getElementById('2-image-header').src= data.forecast.forecastday[1].day.condition.icon.replace('//','http://')
    document.getElementById('2-header-Text').innerText = getDate( data.forecast.forecastday[1].date_epoch);
    document.getElementById('2-temp-resp').innerText = data.forecast.forecastday[1].day.maxtemp_c+' °';
    document.getElementById('2-temp-text').innerText = data.forecast.forecastday[1].day.condition.text;    
    document.getElementById('2-humidity-per').innerText = data.forecast.forecastday[1].hour[0].humidity+' %';

    document.getElementById('3-image-header').src= data.forecast.forecastday[2].day.condition.icon.replace('//','http://')
    document.getElementById('3-header-Text').innerText = getDate( data.forecast.forecastday[2].date_epoch);
    document.getElementById('3-temp-resp').innerText = data.forecast.forecastday[2].day.maxtemp_c+' °';
    document.getElementById('3-temp-text').innerText = data.forecast.forecastday[2].day.condition.text;    
    document.getElementById('3-humidity-per').innerText = data.forecast.forecastday[2].hour[0].humidity+' %';
});
}
function getDate(timeEpoch){
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let date = new Date(timeEpoch * 1000);
    return days[date.getDay()];
}

changeCity('tangier')