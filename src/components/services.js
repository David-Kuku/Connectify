import React from 'react';
import './bootstrap.min.css' 
import './services.css'
import { Link } from 'react-router-dom'

const Services =() =>{
    return(
    <div className='container-fluid mt5'>
     <p className='f3 center underline'><b>
        {'Survey some of our various services '}
        </b>
        </p>
        <div className='row'>
            
            <div className='col-md-4 '>
                <div className=''>
                    <img src='plumbing.jpg' alt='img' style={{height:'180px'}}/>
                    </div>
                    <p className='center'><p><b>Plumbing</b></p><span className='ma2'>Giving your houses the best plumbing fits and ensuring nice customers services. <span className='link blue grow'>Click </span> to 
                    explore more on our {'plumbing services'}</span> </p>
            </div>
            <div className='col-md-4'>
               
                <div>
                    <img src='haircut.jpg' alt='img' style={{height:'180px'}}/>
                    </div>
                    <p className='center'><p><b>Hairstyling</b></p><span className='ma2'>Giving your houses the best plumbing fits and ensuring nice customers services. <span className='link blue grow'>Click </span> to 
                    explore more on our {'hairstyling services'}</span></p>
            </div>
            <div className='col-md-4'>
                    <div>
                    <img src='auto.png' alt='img' style={{height:'180px'}}/>
                    </div>
                    <p className='center'><p><b><Link to = '/automobile' className='black'>Auto Repairs</Link></b></p><span className='ma2'>Giving your houses the best plumbing fits and ensuring nice customers services. <span className='link blue grow'>Click </span> to 
                    explore more on our {'auto-repair services'}</span></p>
            </div>
    </div>
    <div className='row'>
            
            <div className='col-md-4'>
                <div className=''>
                    <img src='leatherworks.jpg' alt='img' style={{height:'180px'}}/>
                    </div>
                    <p className='center'><p><b>Leatherworks</b></p><span className='ma2'>Giving your houses the best plumbing fits and ensuring nice customers services. <span className='link blue grow'>Click </span> to 
                    explore more on our {'leatherwork services'}</span></p>
            </div>
            <div className='col-md-4'>
               
                <div>
                    <img src='web.jpg' alt='img' style={{height:'180px'}}/>
                    </div>
                    <p className='center'><p><b>Web design</b></p><span className='ma2'>Giving your houses the best plumbing fits and ensuring nice customers services. <span className='link blue grow'>Click </span> to 
                    explore more on our {'web design services'}</span></p>
            </div>
            <div className='col-md-4'>
                    <div>
                    <img src='cateringg.jpg' alt='img' style={{height:'180px'}}/>
                    </div>
                    <p className='center'><p><b>Catering</b></p><span className='ma2'>Giving your houses the best plumbing fits and ensuring nice customers services. <span className='link blue grow'>Click </span> to 
                    explore more on our {'catering services'}</span></p>
            </div>
</div>
    </div>    
        )
        
    };
    
    export default Services;