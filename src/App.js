import React, { Component } from 'react';
import Navbar from './components/Navbar/';
import { Switch, Route } from 'react-router-dom';
import Home from './components/views/Home';
import About from './components/views/About';
import Contact from './components/views/Contact';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <main className="container">
          <Switch>
            <Route exact path='/' render={() => <Home />} />
            <Route path='/about' render={() => <About />} />
            <Route path='/contact' render={() => < Contact/>} />
          </Switch>
        </main>

        <footer>
          
        </footer>
      </div>
    )
  }
}
