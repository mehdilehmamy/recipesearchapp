import React, { useEffect, useState } from "react";
import Search from "./Search";
import Recipe from "./Recipe";
import axios from "axios";
import './App.css';

const API_ID = "1c2197f2";
const API_KEY = "12be2d01673eb303065322104b70ef22";

function App() {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  //Capture input in search bar
  function handleChange(e) {
    let userInput = e.target.value;
    setInput(userInput);
  }
  //Set the input to our search query
  function onQuery() {
    setQuery(input);
    setInput("");
  }

  //Do a query to the API using our Input from the search bar
  useEffect(() => {
    fetchRecipe(query);
  }, [query]);

  //Get request function to the API, runs using useEffect when "query" is update (user click).
  const fetchRecipe = (query) => {
    const URL = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`;
    axios.get(URL).then(function (response) {
    setRecipes(response.data.hits);
  }).catch(function (error) {
    // handle error
    console.log("Failed to retrieve data from API.");
  });
  }

  //Get the individual clicked recipe
  function onExpand(id) { 
    console.log("You just clicked on: " + recipes[id].recipe.label);
  }

  return (
    <div className="App">
      <Search onChange={handleChange} onClick={onQuery} value={input}/>
      <div className="recipesContainer">
      { recipes.map((recipe, index) => {
        return <Recipe 
                key ={Math.random()} 
                name={recipe.recipe.label} 
                image={recipe.recipe.image} 
                id={index}
                onExpand={onExpand}
                />
       })}
      </div>
    </div>
  );
}

export default App;
