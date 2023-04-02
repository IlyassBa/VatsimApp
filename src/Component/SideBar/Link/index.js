import React from "react";

// Import StyleSheet 
import "./index.css"


function Link(props) {
    const Pages = ["metarContent","OFPContent","ChartsContent"]
    return (
        <div 
            className="SideBarLink" 
            onClick={
                ()=>{
                    for (let i=0; i<Pages.length; i++){
                        if (props.classString == Pages[i]){   
                            document.getElementsByClassName(Pages[i])[0].style.display="block"
                        }
                        else{
                            document.getElementsByClassName(Pages[i])[0].style.display="none"
                        }
                    }
                    
                    }}
        >




            <i class={props.icon}></i>
            <a href="#">{props.linkname}</a>
        </div>
    )

}

export default Link;