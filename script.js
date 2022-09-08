var citySearches = document.querySelector("ul");
var fetchButton = document.getElementById("searchBtn");
var forecastDays = document.getElementById("forecastCards");

function getApi() {
  var requestUrl =
    "http://api.openweathermap.org/geo/1.0/direct?q={cityname}&limit={limit}&appid=f50db95def699dcc20a954b26a9f7218";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        var cityItem = document.createElement("li");
        cityItem.textContent = data[i];
        citySearches.appendChild(cityItem);
      }
    });
}

fetchButton.addEventListener("click", getApi);

// API key: f50db95def699dcc20a954b26a9f7218

// for loop for all of the forecast cards?
// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
// }
