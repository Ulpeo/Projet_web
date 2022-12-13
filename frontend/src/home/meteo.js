import './meteo.css';
import React, { useEffect } from "react";
import axios from "axios";
function Meteo() {

    function searchWeather(city) {
        console.info(city)
        // Création de l'objet apiWeather
        const apiWeather = new API_WEATHER(city);
        // Appel de la fonction fetchTodayForecast
      
        apiWeather
          .fetchTodayForecast()
          .then(function (response) {
            // Récupère la donnée d'une API
            const data = response.data.list;
      
            for (let i = 0; i < 4; i++) {
              // On récupère l'information principal
              const main = data[i].weather[0].main;
              const description = data[i].weather[0].description;
              const temp = data[i].temp.day;
              const icon = apiWeather.getHTMLElementFromIcon(data[i].weather[0].icon);
      
              // Modifier le DOM
              document.getElementById(`day${i}-forecast-main`).innerHTML = main;
              document.getElementById(`day${i}-forecast-more-info`).innerHTML = description;
              document.getElementById(`day${i}-icon-weather-container`).innerHTML = icon;
              document.getElementById(`day${i}-forecast-temp`).innerHTML = `${temp}°C`;
            }
          })
          .catch(function (error) {
            // Affiche une erreur
            console.error(error);
          });
      }
      searchWeather("brest");
    return (
        <div className="meteo" >
            
            <h2 className="alata">Météo </h2>
            <div className="container">
            <div className="icon">
            <div id='day0-icon-weather-container'></div>
            </div>
            <div className="quicksand">
            <div id='day0-forecast-main'></div>
            <div id='day0-forecast-more-info'></div>
            <div id='day0-forecast-temp'></div>
            </div>
            </div>
        </div>

    )
}

// Clé api
const API_KEY = "4081444b7b90198136fefe6ed4ccf35b";
// Url API
const API_URL = "https://api.openweathermap.org/data/2.5/forecast/daily";
// Base source icon
const API_URL_ICON = "http://openweathermap.org/img/wn/";


class API_WEATHER {
  constructor(city) {
    // Si la ville n'est pas définit alors la ville par défault est Paris
    if (city === undefined) {
      city = "brest";
    }
    this.city = city;
  }

  // Faire la requete à l'API openweathermap
  // Retourne une promise
  fetchTodayForecast() {
    return axios
      .get(`${API_URL}?q=${this.city}&cnt=4&units=metric&appid=${API_KEY}`, {
        crossdomain: true
      })
  }

  // Retourne l'element HTML de l'icon symbolisant la méteo.
  getHTMLElementFromIcon(icon) {
    return `<img src=${API_URL_ICON}${icon}@2x.png class="weather-icon"/>`
  }
}

export default Meteo;