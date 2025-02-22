import React, { Component } from 'react'

export class Navbar2 extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">News World</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/science">Science</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/business">Business</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Entertainment">Entertainment</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/General">General</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Health">Health</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Sports">Sports</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/technology">Technology</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar2


