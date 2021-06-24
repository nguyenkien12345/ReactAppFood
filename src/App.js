import React, { useState } from "react";
import axios from "axios";
import './App.css';
import Recipe from "./componens/Recipe";
import Alert from "./componens/Alert";

const App = () => {
  
  const [value, setValue] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

  const app_id = "24270fcf";
  const app_key = "9c8b546d8fefe29384d4e2e11755885e";
  const url = `https://api.edamam.com/search?q=${value}&app_id=${app_id}&app_key=${app_key}&lang=vi`;
  
  const getData = async() => {
    if(value)
    {
      const result = await axios.get(url);
      console.log(result);
      // Không tìm thấy món ăn
      if(!result.data.more)
      {
        return setAlert("No Food With Such Name");
      }
      setRecipes(result.data.hits);
      setValue("");
    }
    else
    {
      setAlert("Please Fill This Form");
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  }

  return (
    <div className="App">
      <h1> Food Searching App </h1>
      <form className="search-form" onSubmit={onSubmit}>
        { alert && <Alert alert={alert}/>}
        <input type="text" placeholder="Search Food" autoComplete="off" value={value} onChange={(e) => setValue(e.target.value)}/>
        <input type="submit" value="Search"/>
      </form>
      <div className="recipes">
        { recipes?.length > 0 ? 
        (recipes.map((recipe,index) => 
          <Recipe key={index} recipe={recipe}/>
        )) :
          <h2>NOT FOUND</h2>
        }
      </div>
    </div>
  );
};

export default App;
