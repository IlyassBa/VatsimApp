import React from "react";

// Import StyleSheet 
import "./index.css"

// Import Component


// Import Json Settings
import data from '../../../../Configuration/Simbrief/data.json';
import { useState } from "react";


function OFP(props) {
    // var i = true

    // Hooks
    const [PDFLink , setPDFLink] = useState("") // store pdf link
  
    // Function to fetch pdf link
    function GetInfoSimbrief(){
      fetch("https://www.simbrief.com/api/xml.fetcher.php?username=IlyassBaba&json=1")
      .then(SimbriefData => SimbriefData.json())
      .then(SimbriefData => setPDFLink(SimbriefData.files.pdf.link))
      
    }




    // function FlightInfoIndex(){
      
    //           if(i){
    //             document.getElementsByClassName("OFPMore")[0].style.height="1000px"
    //             document.getElementsByClassName("OFPMore")[0].style.backdropFilter = "contrast(100%) saturate(230%) blur(10px) brightness(110%)"
    //             document.getElementsByClassName("ContentInfo")[0].style.display="block"
    //             document.getElementsByClassName("FlightInfoLink")[0].innerHTML="Hide Flight Info"
    //             i = false
    //           }
    //           else{
    //             document.getElementsByClassName("OFPMore")[0].style.height="50px"
    //             document.getElementsByClassName("OFPMore")[0].style.backdropFilter = "contrast(100%) saturate(100%) blur(0px) brightness(100%)"
    //             document.getElementsByClassName("ContentInfo")[0].style.display="none"
    //             document.getElementsByClassName("FlightInfoLink")[0].innerHTML="Show Flight Info"
    //             i = true
    //           }
    // }

    return (
        <div className="OFPContent">
          <div>
            <embed src="https://dispatch.simbrief.com/flights" style={{borderRadius: "15px", width:"80vw", height: "90vh"}}></embed>
          </div>
          
          
          <div>
              <a className="RefreshOFP" onClick={() => {GetInfoSimbrief()}}>Refresh</a>
          </div>
          
          <div>
              <embed src={"https://www.simbrief.com/ofp/flightplans/" + PDFLink} style={{borderRadius: "15px", width:"80vw", height: "90vh"}}></embed>
          </div>
          

        </div>
    )
}

export default OFP;