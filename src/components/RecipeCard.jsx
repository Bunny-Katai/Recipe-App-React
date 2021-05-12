import Reac from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon, Image, Button} from 'semantic-ui-react'
import { useGlobalContext } from '../data/GlobalContext'

const RecipeCard =({title,image, recipe}) => {
const {favorites, toggleFavorite } = useGlobalContext();
    return (
     
      <div className='RecipeContainer'>
       <Card className='col-10 mx-auto col-md-6 col-lg-4 my-3' >
            <Image src={image} alt="recipe card" size='medium' />
          <Card.Content>
            <Card.Header>{title}</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon onClick={()=>toggleFavorite(recipe.uri)} name='like' color={favorites.includes(recipe.uri)?'pink': 'grey'} />
            </a>
            <Button floated='right'><Link to={`recipes/${btoa(recipe.uri)}`} className='RecipeButton'>View Detail</Link></Button>
          </Card.Content>
      </Card>
      </div>
        
    );
  };

export default RecipeCard


