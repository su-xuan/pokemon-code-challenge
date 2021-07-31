import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage, ProfilePage } from './components/Pages';


const App = () => {

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/ProfilePage/:pokeId" component={ProfilePage}></Route>
        </Switch>
      </Router>
    </div>
  )
  }

export default App;
