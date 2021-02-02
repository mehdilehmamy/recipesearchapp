import React from "react";


export default function Recipe (props) {

    function handleClick () {
        props.onExpand(props.id);
      }

    return (
        <div className="recipe" onClick={handleClick}>
            <p>{props.name}</p>
            <img src={props.image} alt="recipe"/>
        </div>
    );
}