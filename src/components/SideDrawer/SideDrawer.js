
import React from 'react';
import './sidedrawer.css';
import '../bootstrap.min.css' ;
import { Link } from 'react-router-dom'

const SideDrawer =({ show }) =>{
    let drawerclasses = 'sidedrawer';

    if(show){
        drawerclasses = 'sidedrawer open'
    }
    return(
        <div className={drawerclasses}>
            <div style={{display: 'flex', alignItems:'center'}}>
                <div><p className='f4 blue ml1 mt3' >Connectify</p></div>
                <div style={{flex:'1'}}/>
                <div><b className='mr1'><Link to = '/' className='black f5'>Home </Link></b></div>
            </div>
            <hr className='mt2 ml2 mr2'/>
            <div><button className='btn btn-primary mt2 '><Link to = '/register' className='white'>Join connectify</Link></button></div>
            <div><button className='btn-black white mt2'><Link to ='signin'>Log in</Link></button></div>
            <div className='mt3'>
            <div className='dib'><i className='fa fa-instagram f4 blue link pointer grow'></i></div>
            <div  className='dib'><i className='fa fa-twitter ml2 f4 blue pointer grow'></i></div>
            <div className='dib'><i className='fa fa-facebook ml2 f4 blue pointer grow'></i></div>
            </div>
        </div>
        )
        
    }
    
    export default SideDrawer