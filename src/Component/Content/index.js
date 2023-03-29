import React from "react";
import { useEffect, useState } from 'react';

// Import StyleSheet 
import "./index.css"


function Content(props) {

    
  const [metar, setMetar] = useState("");
  const [icaoCode, setIcaoCode] = useState("");

  const handleInputChange = (event) => {
    setIcaoCode(event.target.value);
  };

  const fetchMetar = () => {
    if(icaoCode != ""){
      
    let url = "http://localhost:8000/" + icaoCode;
    fetch(url)
      .then(response => response.text())
      .then(data => setMetar(data))
      .catch(error => console.error(error));
    }
    else{
      setMetar("")
    }
  };



    return (
        <div className="content">       
            <div className="MetarContent Content-Placement">  
              <p>{metar}</p>    
            </div>

            <div className="FetchInput Content-Placement">
              <input type="text" id="icaoCodeInput" value={icaoCode} onChange={handleInputChange} />
            </div>
            
            <div className="FetchBtn Content-Placement">    
                <a type="button">Depature</a>
                <a type="button">Arrival</a>
                <a type="button" onClick={fetchMetar}>Fetch</a>
            </div>
        </div>
    )
}

export default Content;