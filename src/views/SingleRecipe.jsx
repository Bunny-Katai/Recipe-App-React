import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';


export default function SingleRecipe() {
    const APP_ID = "7eb16d6b";
    const APP_KEY= "b0591ba0693bd241bd0db73d50b41ae8";
    
    useEffect ( () => { 
        getSpecificRecipe();
      }, []); 
    
      const getSpecificRecipe = async () => {
        const response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_9b5945e03f05acbf9d69625138385408`)
    
        const data = await response.json();
        console.log(data)
      }

    return (
        <div>
            
        </div>
    )
      
}

