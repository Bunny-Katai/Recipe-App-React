import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import '../../src/App.css';




export default function SingleRecipe() {
    const APP_ID = "7eb16d6b";
    const APP_KEY= "b0591ba0693bd241bd0db73d50b41ae8";
    const {uri}=useParams();
    const [recipe, setRecipe] = useState({});
    useEffect ( () => { 
        getSpecificRecipe();
      }, [uri]);
    
      const getSpecificRecipe = async () => {
        const stringUri = encodeURIComponent(atob(uri));
        const response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&r=${stringUri}`);
        
        const data = await response.json();
        setRecipe(data[0])
        console.log(data[0])
      }

     


    return (
        <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
            <div className="card text-center" style={{ height:"100%"}}>
                <div className="card-header text-capitalize">
                <h2>{recipe.label}</h2>
                </div>
                  <img src={recipe.image} style={{height: "25rem"}}
                    className="img-card-top" alt="recipe"/>
                </div>
                <div className="card-body text-capitalize text-center">
                  <h3>By {recipe.source}</h3>
                  <a href={recipe.url}
                     target="-blank"
                     rel="noopener noreferrer"
                     className="btn btn-dark mt-2 mx-2"
                     >View Recipe Link </a>
                </div>
              
        </div>
    )
      
}

