import React from "react";

// Import StyleSheet 
import "./index.css"




function WeatherInfo(props) {


    return (
        <div className="Weather-Container-Content-Info">              
              <div><i class={props.icon}></i><p>{props.label}</p></div>
       </div>
    )
}

export default WeatherInfo;