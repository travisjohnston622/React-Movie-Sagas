import React, { Component } from 'react';
import './App.css';

//React-Router
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Details from '../Pages/Details/Details';
import Edit from '../Pages/Edit/Edit';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App"></div>
        <Route path="/" exact component={Home} />
        <Route path="/details/" exact component={Details} />
        <Route path="/edit/" exact component={Edit} />
      </Router>
    );
  }
}

export default App;
