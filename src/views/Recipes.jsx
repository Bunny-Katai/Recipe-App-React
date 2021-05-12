
import React, { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';



const Recipe = ()  => {
  const APP_ID = "7eb16d6b";
  const APP_KEY= "b0591ba0693bd241bd0db73d50b41ae8";

  const [recipes, setRecipes] = useState([]);
  
  useEffect ( () => { 
    getRecipes();
    getSpecificRecipe();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=thai&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    
    const data = await response.json();
      console.log(data.hits)
    setRecipes(data.hits);
    console.log(data.hits);
    
  };  

  const getSpecificRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_9b5945e03f05acbf9d69625138385408`)

    const data = await response.json();
    console.log(data)
  }

  
      
  return (
    <div className="RecipePage">
      
      {recipes.map(recipe => (
        <RecipeCard 
        recipe = {recipe.recipe}
        key={recipe.recipe.uri}
        title={recipe.recipe.label} 
        image = {recipe.recipe.image}/> 
  
      ))};
      
    </div>
    
  )
}

export default Recipe;
