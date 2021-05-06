import React from 'react';
import './App.css';
import Home from './views/Home';
import { Route, Switch, Link  } from 'react-router-dom';
import Recipe from './views/Recipes';
import Favorite from './views/Favorite';
import Header from './components/Header';
import Footer from './components/Footer';




function App() {
  
  return (
    <>
      <Header /> 
      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/recipe'>
          <Recipe />
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
