import Reac, { useEffect } from 'react';
import './App.css';
import Home from './views/Home';
import { Route, Switch, Link , Router } from 'react-router-dom';
import Recipe from './views/Recipes';
import Favorite from './views/Favorite';
import SingleRecipe from './views/SingleRecipe';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Recipes from './views/Recipes';





function App() {
  

  return (
    <>
      <Header /> 
      <Switch>
        <Route exact path='/home'>
          <Home />
        </Route>
        <Route exact path='/recipes'>
          <Recipes />
        </Route>
        <Route path='/recipes/:id'>{ SingleRecipe }
        </Route>
        <Route path='/favorite'>
          <Favorite />
        </Route> 
      </Switch>
      <Footer />

    </>
  )
}

export default App;
