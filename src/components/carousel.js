import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
import ComponentSlider from "@kapost/react-component-slider";
import "./carousel.css"
import './Navigation'
import Navigation from './Navigation';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton'
import { Link } from 'react-router-dom'
 const Carousel =({ sidedrawerclickopener }) =>{
   return(
     <div  style={{}}>
       <div className='full'>
         <div>
         <DrawerToggleButton click = {sidedrawerclickopener}/>
         
         </div>
       <div className='blue ma2 f3' style={{textAlign:'left'}}>
         Connectify
       </div>
       
       
   </div>
       <hr className='mt2 mb3 hr'/>
       <ComponentSlider>
       <div className='hello' style={{height:'25px', padding:'auto'}}>
         <p className='dib mb0 mr4 grey' style={{}}>Graphics & Design</p>
         <p className='dib mb0 mr4 grey'>Leatherworks</p>
         <p className='dib mb0 mr4 grey'>Catering</p>
         <p className='dib mb0 mr4 grey'>Makeup & Gele-tying</p>
         <p className='dib mb0 mr4 grey'>Hairstyling</p>
         <p className='dib mb0 mr4 grey'>Fashion design</p>
         <p className='dib mb0 mr4 grey'>Photography</p>
         <p className='dib mb0 mr4 grey'>Web design</p>
         <p className='dib mb0 mr4 grey'>Public speaking</p>
         <p className='dib mb0 mr4 grey' style={{}}>Graphics & Design</p>
         <p className='dib mb0 mr4 grey'>Leatherworks</p>
         <p className='dib mb0 mr4 grey'>Catering</p>
         <p className='dib mb0 mr4 grey'>Makeup & Gele-tying</p>
         <p className='dib mb0 mr4 grey'>Hairstyling</p>
         <p className='dib mb0 mr4 grey'>Fashion design</p>
         <p className='dib mb0 mr4 grey'>Photography</p>
         <p className='dib mb0 mr4 grey'>Web design</p>
         <p className='dib mb0 mr4 grey'>Public speaking</p>
         <p className='dib mb0 mr4 grey' style={{}}>Graphics & Design</p>
         <p className='dib mb0 mr4 grey'>Leatherworks</p>
         <p className='dib mb0 mr4 grey'>Catering</p>
         <p className='dib mb0 mr4 grey'>Makeup & Gele-tying</p>
         <p className='dib mb0 mr4 grey'>Hairstyling</p>
         <p className='dib mb0 mr4 grey'>Fashion design</p>
         <p className='dib mb0 mr4 grey'>Photography</p>
         <p className='dib mb0 mr4 grey'>Web design</p>
         <p className='dib mb0 mr4 grey'>Public speaking</p>
       </div>
       </ComponentSlider>
       <hr className='mt3 hr'/>
       
     </div>
   )
  }
 

export default Carousel