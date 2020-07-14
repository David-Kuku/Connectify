import React from 'react';
import './bootstrap.min.css' 
import './signin.css'
import { Link } from 'react-router-dom'
const Signin =() =>{
    return(
        <div>
          <div>
          <nav class="navbar navbar-expand-lg navbar-light " id="navigation">
      <div ><p className="f3 blue" id='pain'>Connectify</p></div>
      <button className="navbar-toggler pt0" id='coor' type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" id='change'></span>
      </button>

      <div className="collapse navbar-collapse navbar-" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto pt0">
          <li className="f4 link pointer blue ml3 grow underline nav-item active">
             <Link to = "/">Home</Link> 
          </li>
          <li  className="f4 link pointer ml3 blue grow underline nav-item">
             <Link to = "/register">Register</Link> 
          </li>

        </ul>
      </div>
    </nav>
          </div>
          <div>
            <article className="br3 ba dark-gray b--black-10 mt4 w-100 w-50-m w-25-l mw5 shadow-5 center bg-light-blue">
        <main class="pa4 black-80">
  <form class="measure center">
    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
      <legend class="f4 fw6 ph0 mh0">Sign In</legend>
      <div class="mt3">
        <label class="db fw6 lh-copy f6" for="email-address">Email</label>
        <input class="pa2 " type="email" name="email-address"  id="email-address"/>
      </div>
      <div class="mv3">
        <label class="db fw6 lh-copy f6" for="password">Password</label>
        <input class="pa2" type="password" name="password"  id="password"/>
      </div>
      <label class="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
    </fieldset>
    <div class="">
      <input class="b ph3 pv2 grow pointer f6 dib" type="submit" value="Sign in"/>
    </div>
    <div class="lh-copy mt3">
      <a href="#0" class="f6 link dim black db"><Link to = "/register">Sign up</Link></a>
      <a href="#0" class="f6 link dim black db">Forgot your password?</a>
    </div>
  </form>
</main>

    </article>
    </div>
    </div>
        )
        
    };
    
    export default Signin;