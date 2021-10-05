
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}

function actualiser(){
  
 city=document.getElementById("city-input").value;
  if(city == "")
  {
    city="paris";
  }
  const newapiWeather = new API_WEATHER(city);
  
  console.log(newapiWeather.city);
  document.getElementById("city-input").value=null;
  
  newapiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;
      console.log(response);

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = newapiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}

function actualiser3days(){
  city=document.getElementById("city-input").value;
 
  const newapiWeather = new API_WEATHER(city);
  
  

  newapiWeather
  .meteo3days()
  .then(function(response) {
    // Récupère la donnée d'une API
    const data = response.data;

    for(var i=0; i<4; i++){
     
      // On récupère l'information principal
      const main = data.list[i].weather[0].main;
      const description = data.list[i].weather[0].description;
      const temp = data.list[i].temp.day;
      const icon = newapiWeather.getHTMLElementFromIcon(data.list[i].weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main'+i).innerHTML = main;
      document.getElementById('today-forecast-more-info'+i).innerHTML = description;
      document.getElementById('icon-weather-container'+i).innerHTML = icon;
      document.getElementById('today-forecast-temp'+i).innerHTML = `${temp}°C`;

    }

    
  })
  .catch(function(error) {
    // Affiche une erreur
    console.error(error);
  });

}

