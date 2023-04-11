import React from "react";

// Import StyleSheet 
import "./index.css"


function Link(props) {
    const Pages = ["metarContent","OFPContent","ChartsContent","VatsimContent","CalculatorContent"]

    
    function SideBarAnimationIn(){
            let i = props.LinkOrder
            document.getElementsByClassName("SideBarLinkA")[i].classList.remove("animate__fadeOutLeft");
            document.getElementsByClassName("SideBarLinkA")[i].style.display = "block";
            document.getElementsByClassName("SideBarLinkA")[i].classList.add("animate__fadeInLeft");
    }
    
    function SideBarAnimationOut(){
            let i = props.LinkOrder
            document.getElementsByClassName("SideBarLinkA")[i].classList.add("animate__fadeOutLeft")
            document.getElementsByClassName("SideBarLinkA")[i].style.display = "none";
            document.getElementsByClassName("SideBarLinkA")[i].classList.remove("animate__fadeInLeft");
       
    }
    


    return (
        <div 
            onMouseOver={()=>{SideBarAnimationIn()}} 
            onMouseOut={()=>{SideBarAnimationOut()}}

            className={"SideBarLink"}
            id="SideBarLink"
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

                    
                    
            <div><i class={props.icon}></i></div>
            <div><a href="#" className={"SideBarLinkA"}>{props.linkname}</a></div>
            
        </div>
    )

}

export default Link;