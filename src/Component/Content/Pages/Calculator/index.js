import React from "react";

// Import StyleSheet 
import "./index.css"


function Charts(props) {


    return (
        <div className="CalculatorContent">
          <embed src="https://www.metric-conversions.org/" style={{borderRadius: "15px",margin:"50px" ,width:"1200px", height: "650px"}}></embed>
        </div>
    )
}

export default Charts;