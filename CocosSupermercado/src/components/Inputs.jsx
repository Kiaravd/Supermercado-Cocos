import React from "react";
export function Button({content, type}){
    return(
        <button className={type}>{content}</button>
    )
}
