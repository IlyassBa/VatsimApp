import React, { useEffect } from 'react';
// CSS
import "./index.css";
import 'animate.css';

// Component
import Link from './Link';




// // JS Style
// function sidebarSize() { 
//     // const windowSize = useRef([window.innerWidth, window.innerHeight]);
//     document.getElementById('sidebar').style.height = "" + window.innerHeight + ""
//     console.log('window.innerHeight')

// }


function SideBarComponent(){

    useEffect(() => {
    }, []);

    return (
        <div className="sidebar" id="sidebar" >
            <Link LinkOrder="0" linkname="home" icon="fa-solid fa-house" classString="homeContent"></Link>
            <Link LinkOrder="1" linkname="Metar" icon="fa-solid fa-cloud" classString="metarContent"></Link>
            <Link LinkOrder="2" linkname="OFP" icon="fa-solid fa-plane" classString="OFPContent"></Link>
            <Link LinkOrder="3" linkname="Charts" icon="fa-solid fa-newspaper" classString="ChartsContent"></Link>
            <Link LinkOrder="4" linkname="Vatsim" icon="fa-solid fa-globe" classString="VatsimContent"></Link>
            <Link LinkOrder="5" linkname="Calculator" icon="fa-solid fa-calculator" classString="CalculatorContent"></Link>
            <Link LinkOrder="6" linkname="Settings" icon="fa-solid fa-gear" classString=""></Link>
        </div>  
    )
}

export default SideBarComponent;