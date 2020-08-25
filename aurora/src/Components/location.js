import React, {Component} from 'react';
import Contact from './contact';
import Footer from './footer';

class Location extends Component{
   
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
<div class="contents h2" style={{ margin : '10px'}}><p ><u><font >Aurora Family Dental&nbsp;</font><font >475 N Farnsworth Avenue, Suite 201 &nbsp;</font><font > Aurora, IL 60505</font></u></p></div>

               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.9418196947668!2d-88.28338258460178!3d41.764912179231395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880efa61238d55d9%3A0x393e01e9658fc5d0!2sAurora%20Family%20Dental!5e0!3m2!1sen!2sus!4v1594756515274!5m2!1sen!2sus" width="1000" height="500" frameborder="0" style={{border:'1px solid black' , margin : '10px'}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                <Footer></Footer>
            </div>
        )
    }
}

export default Location;