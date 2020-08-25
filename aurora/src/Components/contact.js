import React, {Component} from 'react';

class Contact extends Component{
   
    constructor(props){
        super(props);
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
              <p  style={{marginTop : '10px'}} >
              <img src="//v.fastcdn.co/t/fbf10983/20385433/1562171387-43622680-38x21-icon-mail.png" srcset="//v.fastcdn.co/u/fbf10983/43622680-0-icon-mail.png 2x" style={{marginTop: '0px'}} alt=""></img>
             <font style={{color: "black"}} class="h3" >&nbsp; &nbsp;Contact Us</font></p>
              <p class="contacts" style={{marginTop :'30px', fontSize : 15}}>  
             
                <strong style={{fontSize : 20}}>Dr. Neha Sheth D.D.S.</strong>
                <br/><strong style={{fontSize : 20}}>Aurora Family Dental</strong>
                <br/>475 N Farnsworth Ave
                <br/>Suite 201
                <br/>Aurora, Illinois 60505 <br/>
                </p> 
                <br/>
                <p>
                <img src="//v.fastcdn.co/t/fbf10983/20385433/1562171387-43597764-31x31-phone.png" srcset="//v.fastcdn.co/u/fbf10983/43597764-0-phone.png 2x" style={{marginTop: '0px'}} alt=""/>
              
                <font class="h3" style={{ color :'#31b0d5', fontWeight:700 , margin :"10px"}}>CALL US NOW</font>
                </p>
               <h4> <a href="tel:+1-630-820-8550" style={{color : 'orange'}} class="h3">630-820-8550</a></h4>
               <br/><br/>
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.9418196947668!2d-88.28338258460178!3d41.764912179231395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880efa61238d55d9%3A0x393e01e9658fc5d0!2sAurora%20Family%20Dental!5e0!3m2!1sen!2sus!4v1594756515274!5m2!1sen!2sus" width="500" height="350" frameborder="0" style={{border:'1px solid black' ,marginBottom:'100px'}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
        )
    }
}

export default Contact;