import React, {Component} from 'react';
import backendconfig from '../backendConfig';

class Header extends Component{
   
    constructor(props){
        super(props);
        this.state = {
            logo : backendconfig+"/uploads/logo.jpg",
            office : backendconfig+"/uploads/appointment.png"
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
            <div class="container" >
                <div class="row">
                    <div class="col-sm-6">
                      <img src={this.state.logo} style={{height : "250px" ,width :'500px'}} alt="Aurora Family Dental"/>
                    </div>
                    <div class="col-sm-6">
                    <div class="contents h3"><p style={{textAlign : 'right'}}><b >
                    <img src="//v.fastcdn.co/t/fbf10983/20385433/1562171388-43597764-40x40-phone.png" srcset="//v.fastcdn.co/u/fbf10983/43597764-0-phone.png 2x" style={{marginTop: '0px'}} alt=""/> &nbsp;&nbsp;
                        <a href="tel:+1-630-820-8550" rel="null" type="url" id="link-phonenum" class="url-link"><font color="orange"  style={{fontSize : 30}}>630-820-8550</font></a></b></p></div>
                        <p style={{textAlign : 'right'}}><br/>
                    <img src={this.state.office}  style={{marginTop: '0px'}} alt=""/>
                        <a href="/appointment"  rel="null" type="url" id="dental-appointment">
				    	<div class="btn submit-button button_submit dynamic-button  shadow  "><font color="#197e1c" style={{fontSize : 30}}>Schedule An Appointment Now</font></div>
			        </a>
                    </p>
                    <p style={{textAlign : 'right'}}><br/>
                    <a href="/location"  rel="null" type="url" id="contact-dental-office">
				
                    <svg style={{width:'20',height:'30'}} aria-hidden="true" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12 icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" ></path></svg>
                    	<div class="btn submit-button button_submit dynamic-button  shadow  "><font color="orange" style={{fontSize : 30}}> Find the office</font></div>
			        </a>
                    </p>
                    </div>
                </div>
            
            
            </div>
        )
    }
}

export default Header;