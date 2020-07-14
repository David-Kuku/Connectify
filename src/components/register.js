import React from 'react';
import './bootstrap.min.css' 
import './register.css'
import { Link } from 'react-router-dom'

const Register =() =>{

  const  displaypassword=()=>{
    let x = document.getElementById('password');
    if(x.type === "password"){
      x.type = "text"
    }else{
      x.type = "password"
    }
  }
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
             <Link to = "/signin">Sign in</Link> 
          </li>

        </ul>
      </div>
    </nav>
          </div>
          <div>
        <article className="br3 ba dark-gray b--black-10 mt4 w-100 w-50-m w-25-l mw5 shadow-5 center bg-light-blue">
        <main className="pa4 black-80">
  <form className="measure center">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f4 fw6 ph0 mh0">Register</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" for="email-address">Name</label>
        <input className="pa2 " type="email" name="email-address"  id="name"/>
      </div>
      <div class="mv3">
        <label className="db fw6 lh-copy f6" for="email-address">Email</label>
        <input className="pa2 " type="email" name="email-address"  id="email-address"/>
      </div>
      <div class="mv3">
        <label className="db fw6 lh-copy f6" for="password">Password</label>
        <input className="pa2" type="password" name="password"  id="password" />
        <input type="checkbox" onClick={displaypassword} /> <span style={{fontSize:"15px"}}>Show password</span>
      </div>
    
    </fieldset>
    <div class="">
        <Link to='/notfound'>
      <input class="b ph3 pv2 grow pointer f6 dib" type="submit" value="Sign up"/>
      </Link>
    </div>
    
  </form>
</main>

</article>
</div>
</div>
        )
        
    };
    
    export default Register;