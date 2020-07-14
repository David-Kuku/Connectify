import React, {Component} from 'react'
import '../bootstrap.min.css'
import SideDrawer from '../SideDrawer/SideDrawer'
import Backdrop from '../Backdrop/Backdrop'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import {Link} from 'react-router-dom'

class Steering extends Component{
    constructor()
    {
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
        
    return(
        <div>
            <SideDrawer show = {this.state.sidedraweropen}/>
                {backdrop}
             <div className='full'>
                  <div>
                      <DrawerToggleButton click = {this.sidedrawerclickopener}/>
                  </div>
                  <div className='blue ma2 f3' style={{textAlign:'left'}}>
                      Connectify
                  </div>
            </div>
            <hr className="mb0"/>
            <div className="flex-child" style={{display:'flex', height:"25px"}}>
                <div>
                <p className="f6"><Link to = '/automobile' className='black'>Automobile</Link></p>
                </div>
                <div>
                <p className='ml1'>
                        <i className='fa fa-angle-right f4'></i>
                    </p>
                </div>
                <div>
                <p className="ml2 f6">Steering and Wheel</p>
                </div>
                <div>
                <p className='ml1'>
                        <i className='fa fa-angle-right f4'></i>
                    </p>
                </div>
            </div>
            <hr className="mt0"/>
            <div style={{paddingLeft:'0px'}}>
                <p style={{}}>
                   <b style={{display:'flex'}} className='ml2 f5'>Sub Categories Under Steering and Wheel :</b> 
                </p>
            </div>
            <div style={{height:'500px'}}>  
                <ul>
                <li>
                <p  style={{display:'flex', justifyContent:'flex-start'}}>Warn out steering</p></li>
                <li><p  style={{display:'flex', justifyContent:'flex-start'}}>Suspension replacement</p></li>
                <li><p  style={{display:'flex', justifyContent:'flex-start'}}>Wheel alignment</p></li>
                <li><p  style={{display:'flex', justifyContent:'flex-start'}}>Steering control problem</p></li>
                <li><p  style={{display:'flex', justifyContent:'flex-start'}}>Shocks, tie rod ends, idle arms etc</p></li>
                
                </ul>
                </div>
        </div>
    )
}}

export default Steering