import { useContext } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import logo from './Logo.png';


export default function Header ({ location }) {
   

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to='/home' className="navbar-brand">
            <img className="Logo" src= { logo } alt="logo" width='180'/>
        </Link>
        <div className="collapse navbar-collapse show ml-sm-5">
            <ul className="navbar-nav">
                <li className="navbar-item">
                    <Link className="nav-link" to='/home'>
                        Home 
                    </Link>
                </li>

                <li className="navbar-item">
                    <Link className="nav-link" to='/recipes'>
                        Recipes
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link className="nav-link" to='/favorite'>
                        Favorite
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
    );
}

