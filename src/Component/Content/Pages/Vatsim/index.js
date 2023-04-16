import React from "react";

// Import StyleSheet 
import "./index.css"


function Vatsim(props) {


    return (
        <div className="VatsimContent">
          <embed src={"https://v2preview.vattastic.com/"} style={{borderRadius: "15px", width:"80vw", height: "90vh"}}></embed>
        </div>
    )
}

export default Vatsim;