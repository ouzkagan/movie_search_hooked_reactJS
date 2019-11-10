import React from "react";
import "../App.css";
import Main from './Main';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import MovieDetails from './MovieDetails';


const App = () => {
  
    return (
      <Router>
    Navs: <Link to="/">main page</Link>
    <Switch>
          <Route exact path="/" component={Main}/>
          <Route path='/movie/:name/:id' component={MovieDetails}/>
        </Switch>
    </Router>
  );
};


export default App;