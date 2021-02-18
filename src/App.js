import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Posts from './components/Post';
import Navbar from './components/Navbar';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/posts' component={Posts} />
          <Route path='/contact' component={Contact} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
