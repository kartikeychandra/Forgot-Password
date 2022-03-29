import React from 'react'
import Asset from './images/Asset.png';
import './Navbar.css'
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="/"><img src={Asset} height= {70} width= {185} left= {100} top= {210} border-radius= {0} alt=""/></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Join a Race <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link leaderboard" href="/">Leaderboard <span className="sr-only">(current)</span></a>
          </li>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/">Action</a>
              <a className="dropdown-item" href="/">Another action</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/">Something else here</a>
            </div>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <button className="btn" type="submit">Login</button>
        </form>
      </div>
    </nav>
  )
}
