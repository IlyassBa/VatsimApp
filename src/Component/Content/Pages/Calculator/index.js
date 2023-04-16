import React from "react";

// Import StyleSheet 
import "./index.css"


function Charts(props) {


    return (
        <div className="CalculatorContent">
          <embed src="https://www.metric-conversions.org/" style={{borderRadius: "15px", width:"80vw", height: "90vh"}}></embed>
        </div>
    )
}

export default Charts;