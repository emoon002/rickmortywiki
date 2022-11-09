import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import '../../App.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <Link to="/rickmortywiki" className="fs-1 fw-bold ubuntu navbar-brand p-3">Rick & Morty <span className="text-primary">Wiki</span></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <style jsx>
          {`
            button[aria-expanded="false"] > .close {
              display: none;
            }

            button[aria-expanded="true"] > .open {
              display: none;
            }
          `}
        </style>
        <i className='fas fa-bars open fw-bold text-dark'></i>
        <i className='fas fa-times close fw-bold text-dark'></i>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div className="navbar-nav fs-5 p-3">
            <NavLink activeClassName="active" to="/" className="nav-link">Characters</NavLink>
            <NavLink to="/episodes" className="nav-link">Episodes</NavLink>
            <NavLink to="/locations" className="nav-link">Locations</NavLink>
        </div>
        </div>
    </nav>
  )
}

export default Navbar