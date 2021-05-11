import React, { useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';


export default function SingleRecipe() {
    const APP_ID = "7eb16d6b";
    const APP_KEY= "b0591ba0693bd241bd0db73d50b41ae8";
    const {uri}=useParams();
    const [recipe, setRecipe] = useState({});
    useEffect ( () => { 
        getSpecificRecipe();
      }, [uri]); 
    
      const getSpecificRecipe = async () => {
        const stringUri = atob(uri);
        console.log('stringUri', stringUri);
        const response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&r=${stringUri}`);
        
        const data = await response.json();
        setRecipe(data)
        console.log(data)
      }

    return (
        <div>
         <pre>{JSON.stringify(recipe, null, 2)}</pre>   
        </div>
    )
      
}

