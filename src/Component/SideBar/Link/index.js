import React from "react";

function Link(props) {
    return (
        <div>
            <i class={props.icon}></i>
            <a href="#">{props.linkname}</a>
        </div>
    )

}

export default Link;