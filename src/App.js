import React, {Component} from 'react';
import { Provider } from "react-redux";
import {HashRouter as Router,Route} from "react-router-dom";

import "./App.css";

import Navbar from "./Components/layout/Navbar"
import Footer from "./Components/layout/footer";

import Landing from "./Components/home/Landing";
import Movie from "./Components/home/Movie"

import store from "./store";

class App extends Component {
  render() {
  return (
  <Provider store={store}>
    <Router>
      <div>
   <Navbar />
   <Route exact path="/" component={Landing} />
   <Route exact path="/movie/:id" component={Movie} />
   <Footer />
   </div>
   </Router>
   </Provider>

  );  
}
}

export default App;
