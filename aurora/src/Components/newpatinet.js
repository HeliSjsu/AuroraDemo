import React, {Component} from 'react';
import backendconfig from '../backendConfig';
import Footer from './footer';
import '../App.css';
class NewPatient extends Component{
   
    constructor(props){
        super(props);
        this.state = {
            wl_eng : backendconfig+"/uploads/wl_eng",
            cn_eng : backendconfig+"/uploads/cn_eng",
            hp_eng : backendconfig+"/uploads/hp_eng",
            wl_sp_ad : backendconfig+"/uploads/wel_sp_ad",
            wl_sp_ch : backendconfig+"/uploads/wl_sp_ch",
            cn_sp : backendconfig+"/uploads/cn_sp",
        }
    }
    //Call the Will Mount to set the auth Flag to false
    componentWillMount(){
        this.setState({
            authFlag : false
        })
    }


    render(){       
        
        return(
            <div class="container" style={{marginTop :'20px'}}>
     <div id="left">	         
				
					
                    
                        <h1> New Patient Information</h1>
                    
                    
                        <p  style={{fontSize: 20}} >Aurora Family Dental welcomes all new patients.<br/>
                We value your time.  For your ease, We have New Patient Forms in PDF format.  Please print it, fill it,  and bring your completed forms to your 1st appointment.</p>
                <p class="h3"><strong>English Version:</strong></p>
                <ul class="ul">
                <li  style={{fontSize: 20}}><a href={this.state.wl_eng} target="_blank">Patient Information Form</a></li>
                <li  style={{fontSize: 20}}><a href={this.state.cn_eng} target="_blank">Consent To Treatment Form</a></li>
                <li  style={{fontSize: 20}}><a href={this.state.hp_eng} target="_blank">HIPAA Consent Form</a></li>
                </ul>
                <p class="h3"><strong>Spanish Version:</strong></p>
                <ul class="ul">
                <li  style={{fontSize: 20}}><a href={this.state.wl_sp_ad} target="_blank">Patient Information Form ( Adult )</a></li>
                <li  style={{fontSize: 20}}><a href={this.state.wl_sp_ch} target="_blank">Patient Information Form ( Child )</a></li>
                <li  style={{fontSize: 20}}> <a href={this.state.cn_sp} target="_blank">Consent To Treatment Form</a></li>
                <li  style={{fontSize: 20}}><a href="#">HIPAA Consent Form</a></li>
                </ul>
                <p></p>                    
             </div>
            <Footer></Footer> 
            </div>
        )
    }
}

export default NewPatient;