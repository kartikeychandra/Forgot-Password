import React from 'react'
import './footers.css'
export default function footer() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light footer">
      <a className="navbar-brand" href="/"></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link  about-us text-white" href="/">About Us <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link privacy-policy text-white" href="/">Privacy Policy <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link tutorials text-white" href="/">Tutorials <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link terms text-white" href="/">Terms of Services <span className="sr-only">(current)</span></a>
          </li>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/">Action</a>
              <a className="dropdown-item" href="/">Another action</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/">Something else here</a>
            </div>
        </ul>
      </div>
    </nav>
    </div>
  )
}
