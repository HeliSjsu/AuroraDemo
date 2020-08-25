import React, {Component} from 'react';
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import Contact from './contact';
import OfficeHrs from './officehrs';
import backendconfig from '../backendConfig';
import axios from 'axios';
import Footer from './footer';

class Appointment extends Component{
   
    constructor(props){
        super(props);
        this.state = {
            fname : "",
            lname : "",
            emailId : "",
            phoneNo: "",
            msg : "",
            bday: "",
            patienttype :"",
            bestTimes: [
                { key: "af", value: "Morning",  text: "Morning" },   
                { key: "ag", value: "Noon",  text: "Noon" },        
                { key: "ax", value: "Afternoon", text: "Afternoon" } ,
                { key: "az", value: "Evening", text: "Evening" } 
            ],
            errorMsg:"",
            authFlag : false
        }
        //Bind the handlers to this class
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.submitappointment = this.submitappointment.bind(this);
    }
    //Call the Will Mount to set the auth Flag to false
    componentWillMount(){
        this.setState({
            authFlag : false
        })
    }
    //username change handler to update state variable with the text entered by the user
    inputChangeHandler = (event) => {
        const target = event.target;
        const value =  target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    }
    handleOnChange= (selected) => {
        //props.changeMarket(selected);
      //  console.log("Here",this.state.bestTimes);
        console.log("Here",selected);
      }

    // handleOnChange = (e,data) =>{
    //  this.setState({
    //         bestTime : data.value
    //     })
       
    //}

    submitappointment = (e) => {
      
        e.preventDefault();
        const data = {
            bestTime : this.state.bestTime,
            fname : this.state.fname ,
            lname : this.state.lname,
            emailId : this.state.emailId,
            phoneNo : this.state.phoneNo,
            bday : this.state.bday,
            msg : this.state.msg,
            patienttype: this.state.patienttype
        }

        axios.defaults.withCredentials = true;
        //make a post request with the user data
        axios.post(backendconfig+'/requestAppointment',data)
            .then(response => {
                console.log("Status Code : ",response);
                if(response.status === 200){
                    this.setState({
                        authFlag : true
                    })
                }else{
                    console.log(response.data.msg);
                    this.setState({
                        errorMsg : response.data,
                        authFlag : false
                    })
                }
            });

        console.log("Here ",data);
    }

    render(){
        //redirect based on successful login
        
        let display;
        if(this.state.authFlag) {
            display =  <div class="col-sm-6 h3"> Your request has been sent. </div>
        } else {
            display =  <div class="col-sm-6">
            <h2> Request an appointment</h2>
       <form onSubmit ={this.submitappointment} >
     <br/>
     <div class="row">
       <br/>
       <div class="col-sm-8">
           <label class="h4"> Are you a returning patient ?</label>&nbsp;&nbsp;
           <input type="radio"  name="patienttype" id="patienttype" value="Yes" onChange = {this.inputChangeHandler} />Yes
           &nbsp;&nbsp;   <input type="radio"  name="patienttype" id="patienttype" value="No" onChange = {this.inputChangeHandler} />No
       </div>
       </div>
        <div class="row">      
        <br/>
        <div class="col-sm-4">
            
           <label class="h4">  First Name </label>
           <input type="text" class="form-control" value={this.state.fname} name="fname" id="fname" onChange = {this.inputChangeHandler} placeholder="Enter First Name"  required/>
       </div>
       <div class="col-sm-4">
            
            <label class="h4">  Last Name </label>
            <input type="text" class="form-control" value={this.state.lname} name="lname" id="lname" onChange = {this.inputChangeHandler} placeholder="Enter Last Name"  required/>
        </div>
       </div>
       <div class="row">
       <br/>
       <div class="col-sm-8">
           <label class="h4"> Birth Date</label>
           <input type="date" class="form-control" name="bday" id="bday" onChange = {this.inputChangeHandler} />
       </div>
       </div>
       <div class="row">
       <br/>
       <div class="col-sm-8">
           <label class="h4"> Email Address</label>
           <input type="email" class="form-control" name="emailId" id="emailId" onChange = {this.inputChangeHandler} placeholder="Enter Email"  required/>
       </div>
       </div>
       <div class="row">
       <br/>
       <div class="col-sm-5">
           <label class="h4"> Phone number</label>
           <input type="text" class="form-control" name="phoneNo" id="phoneNo" onChange = {this.inputChangeHandler} placeholder="+1 xxx xxx xxxx"  required/>
       </div>
       <div class="col-sm-3">
       <label class="h4"> Best time(s) for follow up :</label>
       <DropdownMultiselect
           options={["Morning", "Noon", "Afternoon", "Evening"]}
           name="bestTimes"
           handleOnChange={(selected) => {
           this.setState({bestTime : selected})
       }}
   />
        </div>  
       
       </div>
       <div class="row">
       <br/>
       <div class="col-sm-8">
           <label class="h4"> Message </label>
           <textarea class="form-control" name="msg" id="msg" onChange = {this.inputChangeHandler} placeholder="Enter message here" rows="5"  required/>
       </div>
       </div>
       <div class="row">
       <br/>
           <div class="col-sm-2 ">
           <input type="submit" class="btn btn-info" value="Request Appointment"/>
           </div>
       </div>
       </form>
       </div>
        }
        return(
            <div>
            <div class="container">
                 <div class="row">
                {display}
                <div class="col-sm-3">
                <Contact></Contact>
                 </div>
                 <div class="col-sm-3">
                     <OfficeHrs></OfficeHrs>
                {/* <Contact></Contact> */}
                 </div>
                </div>
            </div>  
            <Footer></Footer>
            </div>
        )
    }
}

export default Appointment;