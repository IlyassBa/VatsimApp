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
          <embed src="https://dispatch.simbrief.com/flights" style={{borderRadius: "15px",margin:"50px" ,width:"1200px", height: "650px"}}></embed>
           {/* <div className="OFPMore">
            <div className="ContentInfo">
              <div className="FlightInfo">
                <div className="FlightInfo-Container-1">
                  <div className="FlightNumber"><p>{Airline}{FlightNum}</p></div>
                  <div className="CostIndex"><p>CI : 10</p></div>
                  <div className="CruizeFlight"><p>CRZ FL : 200</p></div>
                </div>
                <div className="FlightInfo-Container-2">
                  <div className="CruizeFlight"><p>Dep : GMAD</p></div>
                  <div className="CruizeFlight"><p>Arr : GMMN</p></div>
                  <div className="CruizeFlight"><p>Alter : GMTT</p></div>

                </div>
              </div>
              <div className="FlightRoute">
                <div className="FlightRouteTitle"><p>Route : </p></div>
                <div className="FlightRouteContent">
                  <div><p>GMAD/09 MOGBA4D MOGBA UH400 MAK UR722 FOBAC FOBAC1A GMMN/35R</p></div>
                </div>

              </div>
              <div className="FlightFuel">
                <div className="FlightFuelTitle"><p>Fuel : </p></div>
                <div className="FlightFuelContent">
                  <div className="BlockFuel"><p>Block : 2169Kg</p></div>
                  <div className="ReserveFuel"><p>Reserve : 414Kg</p></div>
                  <div className="Min-TO-Fuel"><p>Min T/OFF Fuel : 2006</p></div> 
                </div> 
              </div>

              <div className="FlightWeight">
                <div className="FlightWeightTitle"><p>Weight : </p></div>
                <div className="FlightWeightContent">
                  <div className="ZFW"><p>ZFW : 19442Kg</p></div>
                  <div className="Payload"><p>Payload : 5842Kg</p></div>
                  <div className="Cargo"><p>Cargo : 1397Kg</p></div> 
                </div>
              </div>
            </div>


            <div className="OFPContentInfo" onClick={() => {
              FlightInfoIndex()
              GetInfoSimbrief()

              // backdrop-filter: contrast(100%) saturate(230%) blur(10px) brightness(110%);
            }}>
              <a href="#" className="FlightInfoLink" >Show Flight Info</a>
            </div>
          </div> */}
          <a className="RefreshOFP" onClick={() => {GetInfoSimbrief()}}>Refresh</a>
          <embed src={"https://www.simbrief.com/ofp/flightplans/" + PDFLink} style={{borderRadius: "15px",margin:"50px" ,width:"1200px", height: "650px"}}></embed>

        </div>
    )
}

export default OFP;