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

  // Visibility Time
  const [OriginAirportVisibility,setOriginAirportVisibility] = useState("")
  const [DirectionAirportVisibility,setDirectionAirportVisibility] = useState("")
  // Icao codes
  const [OriginAirport,setOriginAirport] = useState("")
  const [DirectionAirport,setDirectionAirport] = useState("")
  // Winds
  const [OriginAirportWinds,setOriginAirportWinds] = useState("")
  const [DirectionAirportWinds,setDirectionAirportWinds] = useState("")
  // Temperatures
  const [OriginAirportTemp,setOriginAirportTemp] = useState("")
  const [DirectionAirportTemp,setDirectionAirportTemp] = useState("")
  // Pressure
  const [OriginAirportQNH,setOriginAirportQNH] = useState("")
  const [DirectionAirportQNH,setDirectionAirportQNH] = useState("")
  // Sky conditions
  const [OriginAirportSky,setOriginAirportSky] = useState("")
  const [DirectionAirportSky,setDirectionAirportSky] = useState("")


// Function to Fetch Data from Simbrief
useEffect(() => {

  // function FetchSimbrief(){
    fetch("https://www.simbrief.com/api/xml.fetcher.php?username= " + data.simbriefName + "&json=1")
    .then((response) => response.json())  
    .then((response) =>{
      setOriginAirport(response.api_params.orig)
      setDirectionAirport(response.api_params.dest)

      setUsername(response.api_params.orig)


    })

    let url = "http://192.168.1.7:8000/" + OriginAirport

    fetch(url)
    .then((response) => response.json())  
    .then((response) =>{
      console.log(OriginAirport)
      setOriginAirportWinds(response[OriginAirport].wind + " at " + response[OriginAirport].wind_vel + " Kts")
      setOriginAirportTemp(response[OriginAirport].temp + ' / ' + response[OriginAirport].dewpoint)
      setOriginAirportSky(response[OriginAirport].sky_conditions[0].coverage)
      
      if(response[OriginAirport].sky_conditions[0].coverage == "CLR")
        setOriginAirportSky("clear sky conditions")
      if(response[OriginAirport].sky_conditions[0].coverage == "FEW")
        setOriginAirportSky("few clowds")

      setOriginAirportQNH(response[OriginAirport].alt_hg)
      setOriginAirportVisibility(response[OriginAirport].visibility)

      console.log(response)

    url = "http://192.168.1.7:8000/" + DirectionAirport

    fetch(url)
      .then((response) => response.json())  
      .then((response) =>{
        console.log(DirectionAirport)
        setDirectionAirportWinds(response[DirectionAirport].wind + " Kts at " + response[DirectionAirport].wind_vel + " Kts")
        setDirectionAirportTemp(response[DirectionAirport].temp + ' / ' + response[DirectionAirport].dewpoint)
        
        if(response[DirectionAirport].sky_conditions[0].coverage == "CLR")
          setDirectionAirportSky("clear sky conditions")
        if(response[DirectionAirport].sky_conditions[0].coverage == "FEW")
          setDirectionAirportSky("few clowds")
        
        setDirectionAirportQNH(response[DirectionAirport].alt_hg)
        setDirectionAirportVisibility(response[DirectionAirport].visibility)
        console.log(response)
    
      })
    

}
,[])
})

    return (
        <div className="homeContent">
          <div className="Welcome-Container animate__fadeInLeft"> 
            <div><p>Welcome {data.simbriefName},</p></div>
            <div><p>Do you want to Start your flight from {OriginAirport} to {DirectionAirport} , I Saw its gonna be {OriginAirportSky} on the departure and {DirectionAirportSky} on arrival</p></div>
            <div><p className="Welcome-Container-link">Start The Flight</p></div>
          </div>

          <div className="Weather-Container animate__fadeInLeft Weather-Container-Departure">
            <div className="Weather-Container-Title Weather-Container-Margin"><p>Departure</p></div>
            <div className="Weather-Container-Content">

              <WeatherInfo icon="fa-solid fa-eye" label={OriginAirportVisibility}></WeatherInfo>
              <WeatherInfo icon="fa-solid fa-wind" label={OriginAirportWinds}></WeatherInfo>
              <WeatherInfo icon="fa-solid fa-temperature-three-quarters" label={OriginAirportTemp}></WeatherInfo>
              <WeatherInfo icon="fa-solid fa-gauge" label={OriginAirportQNH}></WeatherInfo>
             
            </div>
          </div>

          <div className="Weather-Container animate__fadeInLeft">
            <div className="Weather-Container-Title Weather-Container-Margin"><p>Arrival</p></div>
            <div className="Weather-Container-Content">

              <WeatherInfo icon="fa-solid fa-eye" label={DirectionAirportVisibility}></WeatherInfo>
              <WeatherInfo icon="fa-solid fa-wind" label={DirectionAirportWinds}></WeatherInfo>
              <WeatherInfo icon="fa-solid fa-temperature-three-quarters" label={DirectionAirportTemp}></WeatherInfo>
              <WeatherInfo icon="fa-solid fa-gauge" label={DirectionAirportQNH}></WeatherInfo>
             
            </div>
          </div>
          
        </div>
    )}


export default Home;