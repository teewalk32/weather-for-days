var APIKey = "7256fefb1f60268b316d8f1834d7403d";

var city;

api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

fetch(queryURL)