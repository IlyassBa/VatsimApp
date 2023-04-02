import React from "react";

// Import StyleSheet 
import "./index.css"


function OFP(props) {


    return (
        <div className="OFPContent">
          <embed src="https://dispatch.simbrief.com/flights" style={{borderRadius: "15px",margin:"50px" ,width:"1150px", height: "650px"}}></embed>
        </div>
    )
}

export default OFP;