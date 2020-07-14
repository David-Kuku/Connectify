import React, { Component } from 'react';
import './bootstrap.min.css' 
import './automobile.css'
import Carousel from './carousel'
import { Link } from 'react-router-dom'
import SideDrawer from './SideDrawer/SideDrawer'
import Backdrop from './Backdrop/Backdrop'
import SearchComp from './searchcomp'
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";


class Automobile extends Component{
    constructor(){
        super()
        this.state = {
            sidedraweropen: false
        }

        this.sidedrawerclickopener = this.sidedrawerclickopener.bind(this)
        this.sidedrawerclickcloser = this.sidedrawerclickcloser.bind(this)
    }

sidedrawerclickopener = () =>{
    this.setState((prevState) =>{
        return {sidedraweropen: !prevState.sidedraweropen}
    })
}
sidedrawerclickcloser = ()=>{
    this.setState({sidedraweropen: false})
}

    render(){
        let backdrop

        if (this.state.sidedraweropen) {
            
            backdrop = <Backdrop click={this.sidedrawerclickcloser}/>
        }
        
        return (
            <div>
                <Carousel sidedrawerclickopener = {this.sidedrawerclickopener}/>
                <SideDrawer show = {this.state.sidedraweropen}/>
                {backdrop}

                <div className='bground'>
                    <div>
                    <SearchComp suggestions = {[
          'Automobile','fashion design','barbing','plumbing','catering','art-design','makeup & geletying','web design',
          'graphics design','photography','leather works'
        ]} />
                    </div>
                    <div className='image'>
                    
                    <h5 className='center'>Automobile repairs</h5>
                </div>
       
                <div className='first mt3 pointer link' style={{display: 'flex', alignItems:'center'}} >
                   <div>
                    <p className='ml2' >
                       <Link to ="/diagonistics" className='black'> Automobile services and repair</Link>
                    </p>
                    </div>
                    <div style={{flex:'1'}}/>
                    <div>
                    <p className='mr2'>
                        <i className='fa fa-angle-right'></i>
                    </p>

                    </div>
                </div>
                <div className='' style={{marginTop:'0px'}}>
                    <hr className='ml2 mr2 mt0 mb0'/>
                </div>
   
                <div className='first mt3 pointer link' style={{display: 'flex', alignItems:'center'}} >
                   <div>
                    <p className='ml2' >
                        <Link to ='Engine-cooling' className='black'>
                        Engine Cooling system
                        </Link>
                    </p>
                    </div>
                    <div style={{flex:'1'}}/>
                    <div>
                    <p className='mr2'>
                        <i className='fa fa-angle-right'></i>
                    </p>
                    </div>
                </div>
                <div className='' style={{marginTop:'0px'}}>
                    <hr className='ml2 mr2 mt0 mb0'/>
                </div>
   
                <div className='first mt3 pointer link' style={{display: 'flex', alignItems:'center'}} >
                   <div>
                    <p className='ml2' ><Link to = 'Heating' className='black'>
                    Heating and AC systems
                    </Link>
                    </p>
                    </div>
                    <div style={{flex:'1'}}/>
                    <div>
                    <p className='mr2'>
                        <i className='fa fa-angle-right'></i>
                    </p>
                    </div>
                </div>
                <div className='' style={{marginTop:'0px'}}>
                    <hr className='ml2 mr2 mt0 mb0'/>
                </div>
   
                <div className='first mt3 pointer link' style={{display: 'flex', alignItems:'center'}} >
                   <div>
                    <p className='ml2' >
                    <Link to ='Transmission' className='black'>
                    Steering suspension and wheel alignment
                    </Link>
                    </p>
                    </div>
                    <div style={{flex:'1'}}/>
                    <div>
                    <p className='mr2'>
                        <i className='fa fa-angle-right'></i>
                    </p>
                    </div>
                </div>
                <div className='' style={{marginTop:'0px'}}>
                    <hr className='ml2 mr2 mt0 mb0'/>
                </div>
   
                <div className='first mt3 pointer link' style={{display: 'flex', alignItems:'center'}} >
                   <div>
                    <p className='ml2' >
                        <Link to='Battery' className='black'>
                        Batteries and Charging system
                        </Link>
                    </p>
                    </div>
                    <div style={{flex:'1'}}/>
                    <div>
                    <p className='mr2'>
                        <i className='fa fa-angle-right'></i>
                    </p>
                    </div>
                </div>
                <div className='' style={{marginTop:'0px'}}>
                    <hr className='ml2 mr2 mt0 mb0'/>
                </div>
   
                <div className='first mt3 pointer link' style={{display: 'flex', alignItems:'center'}} >
                   <div>
                    <p className='ml2' >
                        <Link to ='/Steering' className='black'>
                    Steering and wheel alignment
                    </Link>
                    </p>
                    </div>
                    <div style={{flex:'1'}}/>
                    <div>
                    <p className='mr2'>
                        <i className='fa fa-angle-right'></i>
                    </p>
                    </div>
                </div>
                <div className='' style={{marginTop:'0px'}}>
                    <hr className='ml2 mr2 mt0 mb0'/>
                </div>
   
                <div className='first mt3 pointer link' style={{display: 'flex', alignItems:'center'}} >
                   <div>
                    <p className='ml2' >
                    <Link to ="Exhaust" className='black'>
                       Exhaust system
                       </Link>
                    </p>
                    </div>
                    <div style={{flex:'1'}}/>
                    <div>
                    <p className='mr2'>
                        <i className='fa fa-angle-right'></i>
                    </p>
                    </div>
                </div>
                <div className='' style={{marginTop:'0px'}}>
                    <hr className='ml2 mr2 mt0 mb0'/>
                </div>
   
                <div className='first mt3 pointer link' style={{display: 'flex', alignItems:'center'}} >
                   <div>
                    <p className='ml2' >
                    <Link to ="Brake" className='black'>
                       Brake system
                       </Link>
                    </p>
                    </div>
                    <div style={{flex:'1'}}/>
                    <div>
                    <p className='mr2'>
                        <i className='fa fa-angle-right'></i>
                    </p>
                    </div>
                </div>
                <div className='' style={{marginTop:'0px'}}>
                    <hr className='ml2 mr2 mt0 mb0'/>
                </div>
                <div className='first mt3 pointer link' style={{display: 'flex', alignItems:'center'}} >
                   <div>
                    <p className='ml2' >
                    <Link to ="Vehicle-body" className='black'>
                       Vehicle Body
                       </Link>
                    </p>
                    </div>
                    <div style={{flex:'1'}}/>
                    <div>
                    <p className='mr2'>
                        <i className='fa fa-angle-right'></i>
                    </p>
                    </div>
                </div>
                <div className='' style={{marginTop:'0px'}}>
                    <hr className='ml2 mr2 mt0 mb0'/>
                </div>
                <div className='first mt3 pointer link' style={{display: 'flex', alignItems:'center'}} >
                   <div>
                    <p className='ml2' >
                    <Link to ="Vehicle-maintenance" className='black'>
                       Vehicle Maintenance
                       </Link>
                    </p>
                    </div>
                    <div style={{flex:'1'}}/>
                    <div>
                    <p className='mr2'>
                        <i className='fa fa-angle-right'></i>
                    </p>
                    </div>
                </div>
                <div className='' style={{marginTop:'0px'}}>
                    <hr className='ml2 mr2 mt0 mb0'/>
                </div>
               </div>
   
           
            <div>
                <p><b className='f3 mt2 ww'>Automobile</b></p>
            </div>
                <div className='flex-container'>
                    <div className='flex-child'>
                    <div>
                    <Link to ="/diagonistics">
                       <img src='auto2.jpg'  className="pointer" alt='img' style={{height:'180px'}}/>
                       </Link>
                       </div>
                       <p className='center'><p className='ma0'><b className="pointer"><Link to ="/diagonistics" className="black">Automobile Diagnostics system services and repair</Link></b></p></p>
                    </div>
                    <div className='flex-child'>
                    <div ><Link to ="/Engine-cooling" className="black">
                       <img src='engine.jpg' className="pointer" alt='img' style={{height:'180px'}}/>
                       </Link>
                       </div>
                       <p className='center'><p className='ma0'><b className="pointer"><Link to ="/Engine-cooling" className="black">Engine Cooling system</Link></b></p></p>
                    </div>
                    <div className='flex-child'>
                    <div>
                    <Link to ='/Heating' className='black'>
                       <img src='AC.jpg' className='pointer' alt='img' style={{height:'180px'}}/>
                       </Link>
                       </div>
                       <p className='center'><p className='ma0'><b className="pointer">
                           <Link to = 'Heating' className='black'>Heating and AC systems
                           </Link></b></p></p>
                    </div>
                    <div className='flex-child'>
                    <div>
                    <Link to ='Transmission' className='black'>
                       <img src='energy.jpg' className='pointer' alt='img' style={{height:'180px'}}/>
                       </Link>
                       </div>
                       <p className='center'><p className='ma0'><b className="pointer">
                           <Link to ='Transmission' className='black'>Engine and Transmission</Link></b></p></p>
                    </div>
                </div>
   
                <div className='flex-container'>
                    <div className='flex-child '>
                    <div>
                        <Link to='Battery'>
                       <img className='mt4 pointer' src='battery.jpg' alt='img' style={{height:'180px'}}/>
                       </Link>
                       </div>
                       <p className='center mb4'><p className='ma0'><b className="pointer"><Link to ='Battery' className='black'>Batteries and Charging system</Link></b></p></p>
                    </div>
                    <div className='flex-child '>
                    <div>
                    <Link to ='Steering' className='black'>
                       <img className='mt4 pointer' src='steering.jpg' alt='img' style={{height:'180px'}}/>
                       </Link>
                       </div>
                       <p className='center mb4'><p className='ma0'><b className="pointer">
                       <Link to ="Steering" className='black'>
                           Steering suspension and wheel alignment
                           </Link>
                           </b></p></p>
                    </div>
                    <div className='flex-child'>
                    <div>
                    <Link to ="Exhaust" className='black'>
                       <img className='mt4 pointer' src='exhaust.jpg' alt='img' style={{height:'180px'}}/>
                       </Link>
                       </div>
                       <p className='center mb4'><p className='ma0'><b className="pointer">
                       <Link to ="Exhaust" className='black'>
                           Exhaust system
                           </Link></b></p></p>
                    </div>
                    <div className='flex-child '>
                    <div>
                    <Link to ="Brake" className='black'>
                       <img className='mt4 pointer' src='brake.jpg' alt='img' style={{height:'180px'}}/>
                       </Link>
                       </div>
                       <p className='center mb4'><p className='ma0'><b className="pointer">
                       <Link to ="Brake" className='black'>Brake system
                       </Link>
                       </b></p></p>
                    </div>
                </div>
   
                <div className='flex-container'>
                    <div className='flex-child'>
                    
                    </div>
                    
                    <div className='flex-child '>
                    <div>
                    <Link to ="Vehicle-body" className='black'>
                       <img className='mt4 pointer' src='car_body.jpg' alt='img' style={{height:'180px'}}/>
                       </Link>
                       </div>
                       <p className='center'><p className='ma0'><b className="pointer">
                       <Link to ="Vehicle-body" className='black'> Vehicle Body
                       </Link>
                       </b></p></p>
                    </div>
                    <div className='flex-child'>
                    <div >
                    <Link to ="Vehicle-maintenance" className='black'>
                       <img className='mt4 pointer' src='maintenance.jpg' alt='img' style={{height:'180px'}}/>
                       </Link>
                       </div>
                       <p className='center'><p className='ma0'><b className="pointer">
                       <Link to ="Vehicle-maintenance" className='black'>
                           Vehicle Maintenance
                           </Link></b></p></p>
                    </div>
                    <div className='flex-child'>
                       
                    </div>
                </div>
                
        <ScrollUpButton className='blue' />

            </div>
        );
    }
    
    };
    
    export default Automobile;