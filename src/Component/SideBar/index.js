import React, { useEffect } from 'react';
// CSS
import "./index.css";

// Component
import Link from './Link';



function SideBarComponent(){

    
    useEffect(() => {
    }, []);

    return (
        <div className="sidebar" id="sidebar">
            <Link linkname="Metar"></Link>
            <Link linkname="Settings"></Link>
        </div>  
    )
}

export default SideBarComponent;