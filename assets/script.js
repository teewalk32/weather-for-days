// API key from weather map
var APIKey = "7256fefb1f60268b316d8f1834d7403d";

var city;

api.openweathermap.org / data / 2.5 / weather ? q = { city name } & appid={API key }

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;


//  function for getting weather by city
function getWeather() {
    const newName = document.getElementById("cityInput");
    const cityName = document.getElementById("cityName");
    cityName.innerHTML = "--" + newName.value + "--"


// getting city name from API. 
// Returning response in JSON
// for loop for 5 days of weather min & max
    fetch("http://api.openweathermap.org/data/2.5/weather?q=" + newName.value + "&appid=7256fefb1f60268b316d8f1834d7403d")
        .then(response => response.json())
        .then(data => {
            for (i = 0; i < 5; i++)
                document.getElementById("day" + (i + i) + "Min").innerHTML = "Min:" + Number(data.list[i].main.temp_min - 288.53).toFixed(1) + "degrees";

            for (i = 0; i < 5; i++)
                document.getElementById("day" + (i + i) + "Max").innerHTML = "Max:" + Number(data.list[i].main.temp_max - 288.53).toFixed(1) + "degrees";

        })

// send error alert
        .catch(err => alert("Something Went Wrong"))

        
}

// The day of the week fromm dayjs
var timeDisplayEl = $('#time-display');
function displayTime() {
    var rightNow = dayjs().format('MMM DD, YYYY');
    timeDisplayEl.text(rightNow);
  }
  displayTime();

  setInterval(displayTime);
