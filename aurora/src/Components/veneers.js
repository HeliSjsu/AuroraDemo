import React, {Component} from 'react';
import backendconfig from '../backendConfig';
import Footer from './footer';

class Veneers extends Component{
   
    componentWillMount(){
        this.setState({

            veneers2 : backendconfig+"/uploads/veneers2.png"
        })
    }


    render(){       
        
        return(
            <div class="container">
                <p style={{textAlign: "center" , marginTop : '10px'}} class="h2"><font color="orange"> Veneers</font></p>
                <div class="right h3">
                <img src={this.state.veneers2} style={{marginLeft : '40%'}} class="imgborder"/><br/>
                Dental veneers are custom-made ultra-thin shells of tooth colored materials designed to cover the front surface of teeth to improve your appearance. The veneers are bonded adhesively to the front of the tooth to fix the look of teeth that are chipped, discolored, misaligned, uneven, worn down, or abnormally spaced. Veneers are a cosmetic dentistry procedure that creates a bright, white smile with beautifully aligned, shapely teeth. Veneers are constructed of porcelain or from resin composite materials. Porcelain veneers are thought to be more natural looking as they better mimic the light reflecting properties of natural teeth and are known for their abilities to resist stains. Dr. Sheth will be able to help you decide which choice is right for your particular needs.<p></p>
                <p><strong>Procedure</strong><br/>
                The procedure begins with the preparation of the tooth. This entails removing the discolored or unsightly portion of the tooth and meticulously shaping the tooth in preparation for the new veneer. Once we have shaped the tooth, we will take an impression. This impression will be sent to our lab where your new restoration will be crafted. While the new veneers are created, we will provide you with a temporary restoration. Our temporary restorations will resemble your natural teeth so that you can continue with your daily life without worrying about a missing or incompatible tooth.</p>
                <p>During your second visit to the office, we will proceed with the placement of your final restoration. The veneers will be fitted comfortably into the mouth. We will make every effort to ensure that the new tooth feels exactly like one of your natural teeth. The final step in the process will be to bond the new veneers into your mouth, leaving you with a beautifully restored smile.</p>
                <p><strong>Cost of Dental Veneers</strong><br/>
                There are many factors associated with the cost of dental veneers.  Our office will call your insurance to see if they may cover some of the costs associated with veneers however this is not common because veneers are generally considered a cosmetic dentistry procedure. Please call our office at 630-820-8550 or schedule an appointment with Dr. Sheth to discuss about Veneers.
                </p>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}

export default Veneers;