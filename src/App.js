import React from 'react'
import './App.css';
import { Home, Header, MovieList, ShowsList, FavoritesList } from './components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/favorites">
            <FavoritesList />
          </Route>
          <Route path="/shows">
            <ShowsList />
          </Route>
          <Route path="/movies">
            <MovieList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
