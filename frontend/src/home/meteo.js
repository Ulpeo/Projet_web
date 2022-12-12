import './meteo.css';
import React, {useEffect} from "react";

function Meteo() {
    const getData = async () => {
        const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Brest&appid=ec12c4357d4c94dc9b84414c48576089')
        const resData = await res.json();
        console.log(resData)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
       // <div className="meteo" onLoad="loadWeather()">

            <div className="container" >
                <div className="card-deck mb-3 text-center">
                    <div className="card mb-4 shadow-sm offset-sm-1">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">Aujourd'hui</h4>
                        </div>
                        <div className="card-body">
                            <h2 id="day0-forecast-main" className="card-title">
                            </h2>
                            <div>
                                <p id="day0-forecast-more-info"></p>
                                <div id="day0-icon-weather-container"></div>
                                <h3 id="day0-forecast-temp"></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <script src="js/API_Weather.js"></script>
                <script src="js/scriptMeteo.js"></script>
            </div>


      //  </div>

)
}

export default Meteo;