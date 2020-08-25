import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Footer from './footer';
import backendconfig from '../backendConfig';
class Services extends Component{
   
    constructor(props){
        super(props);
    }
    //Call the Will Mount to set the auth Flag to false
    componentWillMount(){
        this.setState({
            authFlag : false,
            image1 : backendconfig +"/uploads/image.jpg",
        })
    }


    render(){       
        
        return(
            <div class="container" style={{marginTop :'20px' }}>
                <p style={{textAlign: "center"}} class="h1"><font color="#e37719">For Happy Healthy Smile</font></p>
                <p style={{fontSize : 20}}> 
Aurora Family Dental offers comprehensive dental treatment and diagnosis to patients of all ages. The expert care you’ll receive from here will help you enjoy healthy teeth and gums for the rest of your life. </p>
<div class="contents"><p class="h2" style={{textAlign : 'center',color :'#e37719'}}><b>Services We Offer</b></p></div>
<br/>
             <div class = " row" style={{textAlign : 'center'}}>
             <div class="col-sm-3">
                 </div>
                 <div class="col-sm-3">
                     <ul class="h3">
                        <Link to="/canals"> Root Canals </Link><br/>
                        <Link to="/extraction"> Extractions</Link><br/>
                        <Link to="/venner"> Veneers </Link><br/>
                        <Link to="/bonding"> Bonding </Link><br/>
                        <Link to="/dentures"> Dentures </Link><br/>
                    </ul>
                 </div>
                 <div class="col-sm-4">
                 <ul  class="h3">
                         <Link to="/whitening">Teeth Whitening</Link><br/>
                         <Link to="/crowns"> Dental Crowns</Link><br/>
                         <Link to="/bridges"> Dental Bridges</Link><br/>
                          Deep Teeth Cleanings<br/>
                          and more!<br/>
                    </ul>
                 </div>
                 <div class="col-sm-2">
                 </div>

            </div>  
            <Footer></Footer> 
            </div>
        )
    }
}

export default Services;