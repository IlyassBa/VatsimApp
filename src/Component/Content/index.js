import React from "react";
import { useEffect, useState } from 'react';

function Content(props) {

    
  const [metar, setMetar] = useState("");
  const [icaoCode, setIcaoCode] = useState("");

  const handleInputChange = (event) => {
    setIcaoCode(event.target.value);
  };

  const fetchMetar = () => {
    let url = "http://localhost:8000/" + icaoCode;
    fetch(url)
      .then(response => response.text())
      .then(data => setMetar(data))
      .catch(error => console.error(error));
  };



    return (
        <div className="content">        
            <input type="text" id="icaoCodeInput" value={icaoCode} onChange={handleInputChange} />
            <button type="button" onClick={fetchMetar}>Fetch</button>
            <p>{metar}</p>    
        </div>
    )
}

export default Content;