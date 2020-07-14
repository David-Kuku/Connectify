import React from 'react';
import './bootstrap.min.css' 
import './footer.css'

const Footer =() =>{
    return(
        <footer className="pv4 ph3 ph5-m ph6-l ">
        <small className="f6 db tc">© 2020 <b>Connectify.NG</b>., All Rights Reserved</small>
        <div className="tc mt3">
          <a href="/language/" title="Language" className="f5 dib ph2 link dim ">Language</a>
          <a href="/terms/"    title="Terms" className="f5 dib ph2 link dim ">Terms of Use</a>
          <a href="/privacy/"  title="Privacy" className="f5 dib ph2 link dim ">Privacy</a>
        </div>
        
      </footer>
        )
        
    };
    
    export default Footer;