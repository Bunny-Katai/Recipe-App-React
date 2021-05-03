import { useContext } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default function Header ({ location }) {
   

    return (
      <header>
        <Menu>
            <Menu.Item
                name='home'
               
            >
                <Link to="/home">Home</Link>
            </Menu.Item>
        
            <>
                <Menu.Item
                name='recipe'
              
                >
                <Link to="/recipe">Recipes</Link>
                </Menu.Item>

                <Menu.Item
                name='favorite'
              
                >
                 <Link to="/favorite">Favorite</Link>
                </Menu.Item>
            </>
          
            <Menu.Item
               
                name='gallery'
            >
                <Link to="/gallery">Gallery</Link>
            </Menu.Item>
        
           
        </Menu>
    </header>
    );
}