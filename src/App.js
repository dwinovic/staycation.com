import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'assets/scss/style.scss';
import 'assets/scss/_color-variables.scss';
import LandingPage from 'pages/LandingPage';
import DetailsPage from 'pages/DetailsPage';
import Example from 'pages/Example';
import Checkout from 'pages/Checkout';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/properties/:id" component={DetailsPage}></Route>
        <Route path="/example" component={Example}></Route>
        <Route path="/checkout" component={Checkout}></Route>
      </Router>
    </div>
  );
}

export default App;
