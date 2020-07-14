import React from 'react';
import './Navigation.css'
import './bootstrap.min.css' 
import { Link } from 'react-router-dom'

const Navigation =() =>{
    return(
    <nav class="navbar navbar-expand-lg navbar-light " id="navigation">
      <div ><p className="f3 blue" id='pain'>Connectify</p></div>
      <button className="navbar-toggler pt0" id='coor' type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" id='change'></span>
      </button>

      <div className="collapse navbar-collapse navbar-" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto pt0">
          <li className="f4 link pointer blue ml3 grow underline nav-item active">
             <Link to = "/signin">Sign in</Link> 
          </li>
          <li  className="f4 link pointer ml3 blue grow underline nav-item">
             <Link to = "/register">Register</Link> 
          </li>

        </ul>
      </div>
    </nav>)
  }

export default Navigation;