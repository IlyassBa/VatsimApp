import React from "react";

// Import StyleSheet 
import "./index.css"


function Link(props) {
    return (
        <div className="SideBarLink">
            <i class={props.icon}></i>
            <a href="#">{props.linkname}</a>
        </div>
    )

}

export default Link;