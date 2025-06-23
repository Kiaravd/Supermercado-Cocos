import React from "react";
export function CardMain({title, content, list1, list2, list3}){
    return(
        <div className="Card-Main">
            <h3>{title}</h3>
            <p>{content}</p>
            <small>{list1}</small>
            <small>{list2}</small>
            <small>{list3}</small>
        </div>
    )
}