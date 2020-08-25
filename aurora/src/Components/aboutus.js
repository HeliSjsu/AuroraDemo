import React, {Component} from 'react';
import Footer from './footer';

class AboutUs extends Component{
   
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
          <p style={{ textAlign: 'center'}} class="h1"><b><font color="orange">Meet Your Dentist - Dr. Neha Sheth, D.D.S.</font></b></p>
          <br/><br/>
          <div class="row">
            <div class="col-sm-9">
            <div id="left">	         
				<p style={{fontSize : 20}}>Dr. Neha Sheth received her Doctor of Dental Surgery degree from the prestigious University of Illinois, College of Dentistry in 2004.</p>
                <p style={{fontSize : 20}}>Dr. Sheth has more than 20 years of experience in both general and pediatric dentistry. Additionally, she has completed numerous advanced training courses and continue education  in Endodontics, Pediatric Dentistry, and Short Term Orthodontics. Dr.Sheth is also a proud member of the American Dental Association, the Illinois State Dental Society and the Chicago Dental Society. </p>
                <p style={{fontSize : 20}}>When Dr. Sheth is not practicing at Aurora Family Dental, she enjoys spending time with her family and friends. Her hobbies include movies, traveling, and reading.</p>
                <p style={{fontSize : 20}}>Dr. Sheth treats her patients with honesty, respectfully, and with compassion.  Dr. Sheth looks forward to providing exceptional dental care for you and your entire family.</p>
                <p style={{fontSize : 20}}>She makes it a priority to get to know each patient individually to provide for their oral health care needs. You can trust that Dr.Sheth cares as much about your oral health and comfort as you do. </p>
            </div>
            </div>
            <div class="col-sm-3">
                <img  src="https://test-demo-amazon2.s3-eu-west-1.amazonaws.com/5e8187df8bea9e66dcedbf99/editedname/1588043042054300request.PNG"  style={{height :"200px" , width:"200px" , borderRadius :'25px' , border:'2px solid black'}}></img>
            </div>
          </div>
          <Footer></Footer>
            </div>
        )
    }
}

export default AboutUs;