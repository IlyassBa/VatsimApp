import React from "react";
import {useState} from 'react';

// Import StyleSheet 
import "./index.css"


// Import Json Settings
import data from '../../Configuration/Simbrief/data.json';


function Content(props) {

  // Hooks to pick up data

  const [metar, setMetar] = useState("")
  const [icaoCode, setIcaoCode] = useState("");


  // Function to get the icao from input
  const handleInputChange = (event) => {
    setIcaoCode(event.target.value);
  };


  // Function to fetch origin icao code from Simbrief and send it to fetchmetar function
  function fetchOriginMetar(username){
    fetch("https://www.simbrief.com/api/xml.fetcher.php?username=" + username +"&json=1")
    .then(response => response.json())
    .then(response => fetchMetar(response.api_params.orig))
  }

  
  // Function to fetch destination icao code from Simbrief and send it to fetchmetar function
  function fetchDestinationMetar(username){
    fetch("https://www.simbrief.com/api/xml.fetcher.php?username=" + username +"&json=1")
    .then(response => response.json())
    .then(response => fetchMetar(response.api_params.dest))
  }
  

  // Function to fetch the data from api using the icao code
  function fetchMetar(Code) {
        if(Code != ""){
          
          let url = "http://192.168.1.9:8000/" + Code;
          
          fetch(url)
            .then(response => response.text())
            .then(data => setMetar(data))
            .catch(error => console.error(error));
        }
        else{
          setMetar("")
        }
      }

    





    return (
        <div className="content">       
            <div className="MetarContent Content-Placement">  
              <p>{metar}</p>    
            </div>

            <div className="FetchInput Content-Placement">
              <input type="text" id="icaoCodeInput" value={icaoCode} onChange={handleInputChange} />
            </div>
            
            <div className="FetchBtn Content-Placement">    
                <a type="button" onClick={() => fetchOriginMetar(data.simbriefName)}>Depature</a>
                <a type="button" onClick={() => fetchDestinationMetar(data.simbriefName)}>Arrival</a>
                <a type="button" onClick={() => fetchMetar(icaoCode)}>Fetch</a>
            </div>
        </div>
    )
}

export default Content;