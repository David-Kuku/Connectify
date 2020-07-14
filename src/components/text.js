import React from 'react';
import './bootstrap.min.css' 


const Text =() =>{
    return(
    <div className='container-fluid mt5'>
        <div className='row'>
        <div className='col-md-1'></div>
        <div className="col-md-5 input-group" style={{width: "100%"}}>
          <p className='f3'><b>
          Find your favorite artisan <span className='blue'>here</span>
          </b>
          </p>
        </div>
            <div className='col-md-6'>
            </div>
        </div>
    </div>
        )
        
    };
    
    export default Text;