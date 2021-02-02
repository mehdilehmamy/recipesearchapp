import React from "react";

export default function Search(props) {
    return (
            <div className="searchBar">
                <input type="text" onChange={props.onChange} value={props.value}/>
                <button className="searchButton" onClick={props.onClick}><span>Search Recipe</span></button>
            </div>
    );
}