import React, { useEffect, useState } from "react";

// Import StyleSheet 
import "./index.css"

// Import Component
import WeatherInfo from "./Components/Weather";


// Import Json Settings
import data from '../../../../Configuration/Simbrief/data.json';


function Home(props) {


  // Hooks to set Value for HTMLElements
  const [Username,setUsername] = useState("")

  const [OriginAirportZtime,setOriginAirportZtime] = useState("")
  const [DirectionAirportZtime,setDirectionAirportZtime] = useState("")

  const [OriginAirport,setOriginAirport] = useState("")
  const [DirectionAirport,setDirectionAirport] = useState("")

  const [OriginAirportWinds,setOriginAirportWinds] = useState("")
  const [DirectionAirportWinds,setDirectionAirportWinds] = useState("")


  // const [OriginAirportWinds,setOriginAirportWinds] = useState("")
  // const [DirectionAirportWinds,setDirectionAirportWinds] = useState("")

// Function to Fetch Data from Simbrief
useEffect(() => {

  function FetchSimbrief(){
    fetch("https://www.simbrief.com/api/xml.fetcher.php?username=" + data.simbriefName + "&json=1")
    .then((response) => response.json())
    .then((response) =>{


      setOriginAirport(response.api_params.orig)
      setDirectionAirport(response.api_params.dest)

      setUsername(response.api_params.orig)

      // Arrays to split Weather Data
      const WeatherArrayOrigin = response.weather.orig_metar.split(" ")
      const WeatherArrayDestination= response.weather.dest_metar.split(" ")

      
      setOriginAirportWinds(WeatherArrayOrigin[2])
      setDirectionAirportWinds(WeatherArrayDestination[2])
      
      setOriginAirportZtime(WeatherArrayOrigin[1])
      setDirectionAirportZtime(WeatherArrayDestination[1])

      console.log(response)


      // console.log(WeatherArray)
    })
  }


  setInterval(() => {
    FetchSimbrief()
  }, 1000);
  


},[])



    return (
        <div className="homeContent">
          <div className="Welcome-Container animate__fadeInLeft"> 
            <div><p>Welcome {data.simbriefName},</p></div>
            <div><p>Do you want to Start your flight from {OriginAirport} to {DirectionAirport} , I Saw its gonna be cloudy on the departure</p></div>
            <div><p className="Welcome-Container-link">Start The Flight</p></div>
          </div>

          <div className="Weather-Container animate__fadeInLeft Weather-Container-Departure">
            <div className="Weather-Container-Title Weather-Container-Margin"><p>Departure</p></div>
            <div className="Weather-Container-Content">

              <WeatherInfo icon="fa-solid fa-clock" label={OriginAirportZtime}></WeatherInfo>
              <WeatherInfo icon="fa-solid fa-wind" label={OriginAirportWinds}></WeatherInfo>
              <WeatherInfo icon="fa-solid fa-temperature-three-quarters" label="Temp"></WeatherInfo>
              <WeatherInfo icon="fa-solid fa-gauge" label="1013"></WeatherInfo>
             
            </div>
          </div>

          <div className="Weather-Container animate__fadeInLeft">
            <div className="Weather-Container-Title Weather-Container-Margin"><p>Arrival</p></div>
            <div className="Weather-Container-Content">

              <WeatherInfo icon="fa-solid fa-clock" label={DirectionAirportZtime}></WeatherInfo>
              <WeatherInfo icon="fa-solid fa-wind" label={DirectionAirportWinds}></WeatherInfo>
              <WeatherInfo icon="fa-solid fa-temperature-three-quarters" label="Temp"></WeatherInfo>
              <WeatherInfo icon="fa-solid fa-gauge" label="1013"></WeatherInfo>
             
            </div>
          </div>
          
        </div>
    )
}

export default Home;