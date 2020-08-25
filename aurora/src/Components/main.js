import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Navbar from './navbar';
import Appointment from './appointmentForm';
import Contact from './contact';
import Home from './home';
import AboutUs from './aboutus';
import Services from './services';
import Crowns from './crowns';
import Whitening from './whitening';
import Bridges from './bridges';
import Canal from './canal';
import Extraction from './extraction';
import Veneers from './veneers';
import Location from './location';
import NewPatient from './newpatinet';
import Dentures from './dentures';
import Bonding from './bonding';

//Create a Main Component
class Main extends Component {
    render(){
        return(
            <div>
                {/* <Switch> */}
                    <Route path="/" component={Home}/>
                    <Route path="/crowns" component={Crowns}/>
                    <Route path="/whitening" component={Whitening}/>
                    <Route path="/bridges" component={Bridges}/>
                    <Route path="/bonding" component={Bonding}/>
                    <Route path="/dentures" component={Dentures}/>
                    <Route path="/canals" component={Canal}/>
                    <Route path="/extraction" component={Extraction}/>
                    <Route path="/venner" component={Veneers}/>
                    <Route path="/appointment" component={Appointment}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/location" component={Location}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/services" component={Services}/>
                    <Route exact path="/" component={AboutUs}/>
                    <Route exact path="/about-us" component={AboutUs}/>
                    <Route path="/new-patients" component={NewPatient}/>
                    
                {/* </Switch> */}
            </div>
        )
    }
}
//Export The Main Component
export default Main;