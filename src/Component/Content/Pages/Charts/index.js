import React from "react";

// Import StyleSheet 
import "./index.css"


function Charts(props) {


    return (
        <div className="ChartsContent">
          <embed className="chartEmbed" src="http://jeppesen.com/icharts/index.jsp?login-username=azulpilots&login-password=AlphaDelta190" style={{borderRadius: "15px",margin:"50px" ,width:"1150px", height: "650px"}}></embed>
          <div className="AddChart" onClick={()=>{
            var chart = document.getElementsByClassName("chartEmbed")[0]
            document.getElementsByClassName("ChartsContent")[0].appendChild(chart)
          }}>Plus</div>
        </div>
    )
}

export default Charts;