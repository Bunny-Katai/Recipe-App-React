import Reac from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon, Image, Button} from 'semantic-ui-react'

const RecipeCard =({title,image, url}) => {
    return (
     
      <div className='RecipeContainer'>
       <Card>
            <Image src={image} alt="recipecard" size='medium' />
          <Card.Content>
            <Card.Header>{title}</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='like' />
            </a>
            <Button floated='right'><Link to='recipes' className='RecipeButton'>Recipe</Link></Button>
          </Card.Content>
      </Card>
      </div>
        
    );
  };

export default RecipeCard


