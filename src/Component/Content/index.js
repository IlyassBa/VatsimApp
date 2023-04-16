import React from "react";

// Import StyleSheet 
import "./index.css"


// Import Component
import Home from "./Pages/Home";
import Metar from "./Pages/Metar";
import OFP from "./Pages/OFP";
import Charts from "./Pages/Charts";
import Vatsim from "./Pages/Vatsim";
import Calculator from "./Pages/Calculator";


function Content(props) {


    return (
        <div className="content">
            <Home></Home>  
            <Metar></Metar>
            <OFP></OFP>
            <Charts></Charts>
            <Vatsim></Vatsim>
            <Calculator></Calculator>
        </div>
    )
}

export default Content;