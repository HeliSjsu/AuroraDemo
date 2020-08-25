import React, {Component} from 'react';
import backendconfig from '../backendConfig';
class OfficeHrs extends Component{
   
    constructor(props){
        super(props);
        this.state = {
            logo : backendconfig+"/uploads/appointment.png"
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
            <div class="container">
       
       <div class="contents">
          <p> 
		<img src={this.state.logo}  style={{marginTop: '10px'}} alt=""/>
        <font style={{color: "black"}} class="h2" >&nbsp; &nbsp; Office Hours</font></p>
        </div>
        <br/>
        
        <b><div class="contents"><p style= {{textAlign : "left" ,fontSize :'18px'}}><font color="black">Monday:&nbsp; &nbsp; &nbsp; &nbsp; 10:00 AM - 6:00 PM
</font></p><p style= {{textAlign : "left",fontSize :'18px' }}><font color="black" >Tuesday:&nbsp; &nbsp; &nbsp; &nbsp; 10:00 PM - 6:00 PM
</font></p><p style= {{textAlign : "left" ,fontSize :'18px'}}><font color="black">Wednesday:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Closed
</font></p><p style= {{textAlign : "left",fontSize :'18px' }}><font color="black">Thursday:&nbsp; &nbsp; &nbsp; 10:00 AM - 6:00 PM
</font></p><p style= {{textAlign : "left",fontSize :'18px' }}><font color="black">Friday:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Closed
</font></p><p style= {{textAlign : "left" ,fontSize :'18px'}}><font color="black">Saturday:&nbsp; &nbsp; &nbsp; &nbsp; 9:00 AM - 2:00 PM</font></p></div></b>
<p><small> <font  color="red">*Office hrs are subject to change</font></small></p>
            </div>
        )
    }
}

export default OfficeHrs;