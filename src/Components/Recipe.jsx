import React from "react";


export default function Recipe (props) {

    function handleClick () {
        props.onExpand(props.id);
      }

    return (
        <div className="recipe" onClick={handleClick}>
            <h3>{props.name}</h3>
            <img src={props.image} alt="recipe"/>
        </div>
    );
}