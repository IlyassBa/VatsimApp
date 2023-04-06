import React, { useEffect } from 'react';
// CSS
import "./index.css";

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
        <div className="sidebar" id="sidebar">
            <Link linkname="Metar" classString="metarContent"></Link>
            <Link linkname="OFP" classString="OFPContent"></Link>
            <Link linkname="Charts" classString="ChartsContent"></Link>
            <Link linkname="Vatsim" classString="VatsimContent"></Link>
            <Link linkname="Calculator" classString="CalculatorContent"></Link>
            <Link linkname="Settings" classString=""></Link>
        </div>  
    )
}

export default SideBarComponent;