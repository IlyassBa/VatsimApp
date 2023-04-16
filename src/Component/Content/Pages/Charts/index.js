import React from "react";

// Import StyleSheet 
import "./index.css"


function Charts(props) {


    return (
        <div className="ChartsContent">
          <embed className="chartEmbed" src="https://charts.navigraph.com/flights" style={{borderRadius: "15px", width:"80vw", height: "90vh"}}></embed>
        </div>
    )
}

export default Charts;