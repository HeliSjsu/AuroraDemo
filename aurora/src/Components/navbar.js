import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";
//create the Navbar Component
class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.setState({})
    }

 
    render() {
        return (
            <div>
                <nav class="navbar navbar-inverse">
                    <div class="container-fluid" style={{background :'#ea6f06eb'}}>
                        <div class="navbar-header" style={{float : "left"}}>
                          </div>
                          <ul class="nav navbar-nav">
                            <li><Link to="/about-us" spy={true} smooth={true} duration={250} containerId="containerElement"    style={{color :'black' , fontWeight : 700}}><font class="h3"> About Us</font></Link></li>
                         
                            <li><Link to="/services"  style={{color :'black' , fontWeight : 700}}> <font class="h3">Services</font></Link></li>
                            <li><Link to="/new-patients" style={{color :'black' , fontWeight : 700}}><font class="h3">New Patients</font></Link></li>
                            <li><Link to="/appointment" style={{color :'black' , fontWeight : 700}}> <font class="h3">Request Appointment</font></Link></li>
                            {/* <li><Link to='/reviews'> Reviews</Link></li> */}
                            <li><Link to='/location' style={{color :'black' , fontWeight : 700}}><font class="h3"> Location </font></Link></li>
                            </ul>             
                          </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;