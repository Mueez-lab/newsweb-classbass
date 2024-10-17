import './App.css';
import React, { Component } from 'react'
import Navbar2 from './components/Navbar2';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar2 />
          <Routes>
            <Route exact path='/'
              element={<News
                country="us"
                category="science" />} />
            <Route exact path='/home'
              element={<News
                country="us"
                category="science" />} />
            <Route exact path='/science' element={<News
              country="us"
              category="science" />} />
            <Route exact path='/business' element={<News
              country="us"
              category="business" />} />
            <Route exact path='/Entertainment' element={<News
              country="us"
              category="entertainment" />} />
            <Route exact path='/General' element={<News
              country="us"
              category="general" />} />
            <Route exact path='/Health' element={<News
              country="us"
              category="health" />} />
            <Route exact path='/Sports' element={<News
              country="us"
              category="sports" />} />
            <Route exact path='/technology' element={<News
              country="us"
              category="technology" />} />
          </Routes>

        </div>
      </Router>
    )
  }
}