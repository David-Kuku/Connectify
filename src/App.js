import React, { Component} from 'react';
import Navigation from './components/Navigation';
import './App.css';
import Signin from './components/signin'
import Search from './components/Search';
import Text from './components/text';
import Swipe from './components/swipe';
import Artisan from './components/Artisan';
import Services from './components/services';
import Footer from './components/footer'
import Register from './components/register';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";
import 'tachyons';
import Automobile from './components/automobile';
import SideDrawer from './components/SideDrawer/SideDrawer'
import Diag from './components/autosubs/diagonistics';
import Engine from './components/autosubs/Engine-cooling';
import Battery from './components/autosubs/batteries';
import Heating from './components/autosubs/heating';
import Transmission from './components/autosubs/transmission';
import Steering from './components/autosubs/steering';
import Brake from './components/autosubs/brake';
import Exhaust from './components/autosubs/exhaust';
import Vehicle_body from './components/autosubs/Vehicle-body';
import Vehicle_maintenance from './components/autosubs/Vehicle-maintenance'
class App extends Component {
  constructor(){
    super();
    this.state = {
      route: 'empty',
  
    };

    this.OnRouteChange = this.OnRouteChange.bind(this);

  }
  /*componentDidMount(){
    console.log(this.props.store)
  }*/
  
  OnRouteChange = (route) =>{
    
      this.setState({route:route})
      
    }
 

  render(){
    
    return (
      <div className="App" style={{height:'100%'}}>
        <Router>
        <Switch>
        
          
        <Route path = "/" exact component ={Home}/>
       <Route path = "/signin" component ={Signin}/>
       <Route path = "/register" component ={Register}/>
       <Route path = "/automobile" component ={Automobile}/>
       <Route path = "/diagonistics" component ={Diag}/>
       <Route path = "/Engine-cooling" component ={Engine}/>
       <Route path = "/Battery" component ={Battery}/>
       <Route path = "/Heating" component ={Heating}/>
       <Route path = "/Transmission" component ={Transmission}/>
       <Route path = "/Steering" component ={Steering}/>
       <Route path = "/Brake" component ={Brake}/>
       <Route path = "/Exhaust" component = {Exhaust}/>
    <Route path = "/Vehicle-body" component = {Vehicle_body}/>
    <Route path = "/Vehicle-maintenance" component = {Vehicle_maintenance}/>
  
       </Switch>
       <Footer/>
       </Router>
      </div>
    );
  }
}

const Home = () =>(
  <div>
    <Navigation/>
    <Text/>
        <Search suggestions = {[
          'Automobile','fashion design','barbing','plumbing','catering','art-design','makeup & geletying','graphics-design','painting',
          'photography','leather works', 'web design'
        ]} />
        <Swipe/>
        <Artisan />
        <Services/>
        <ScrollUpButton className='blue' />

  </div>
)

export default App;
