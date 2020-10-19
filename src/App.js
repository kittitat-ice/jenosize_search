import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Jenosize from './pages/Jenosize';

const apiKey = 'AIzaSyDM5zeWpaPPaPnaNFysmh81nNN9I1G3kac'

function App() {
  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous"
        />
      </head>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/jenosize">
            <Jenosize />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
