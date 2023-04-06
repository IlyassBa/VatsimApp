import React from "react";

// Import StyleSheet 
import "./index.css"


function Vatsim(props) {


    return (
        <div className="VatsimContent">
          <embed src={"https://v2preview.vattastic.com/"} style={{borderRadius: "15px",margin:"50px" ,width:"1200px", height: "650px"}}></embed>
        </div>
    )
}

export default Vatsim;