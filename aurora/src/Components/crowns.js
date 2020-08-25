import React, {Component} from 'react';
import backendconfig from '../backendConfig';
import Footer from './footer';

class Crowns extends Component{
   
    componentWillMount(){
        this.setState({
            dental_crowns : backendconfig+"/uploads/dental_crowns.jpg",
            crowns : backendconfig+"/uploads/crowns.png",
        })
    }


    render(){       
        
        return(
            <div class="container">
                <p style={{textAlign: "center" ,marginTop : '10px'}} class="h2"><font color="orange">Dental Crowns</font></p>
                <div class="right h3">
A dental crown is a restorative dentistry treatment that is placed over a tooth to improve strength, shape or appearance. Dental crowns, also called “caps,” are also used as the final restoration for dental implants, serving as the replacement for the artificial tooth. Although there are several different materials that can be used for dental crowns, Dr. Sheth recommend all-porcelain dental crowns because they provide the most natural-looking restorations as they closely resemble the color and texture of your natural teeth.<p></p>
<p><strong>When Are Dental Crowns Used?</strong></p><br/>
<img src={this.state.dental_crowns} style={{alignSelf:'baseline' , border : '1px solid black'}}/><br/>
<p>Dental crowns are used when more conservative dental restorations cannot be used to improve the strength or appearance of a damaged tooth. Dr. Sheth will determine what procedure you are eligible for based on your dental health and the aesthetic and functional benefits of a restorative dentistry treatment. The following are common reasons dental crowns are used to restore teeth:</p>
<ul class="ul">
<li>To strengthen and improve the appearance and size of a tooth that has been treated for a root canal</li>
<li>To restore a broken or cracked tooth</li>
<li>To cover a misshapen tooth</li>
<li>To cover a dental implant</li>
<li>To hold a dental bridge or partial dentures in place</li>
</ul>
<p><strong>Dental Crown Procedure</strong></p><br/>
<p>Before it is determined that a patient requires a dental crown to restore their tooth, Dr. Sheth will perform a thorough evaluation of your dental health to determine if you would benefit from a less invasive procedure. Once it is decided that a dental crown will be used to restore a tooth, the first step is to prepare the tooth to receive the crown and the second step is to place it.</p>
<p>When Dr. Sheth decided to go ahead with a full crown restoration, we will set aside 2-3 appointments for the entire process.  Although the majority of crowns are completed in two visits, there is sometimes a need for a third visit to ensure a proper fit.</p>
<p>The procedure begins with the removal of all decay in the tooth.  Once Dr. Sheth removed the decay, She will take an impression of the tooth.  This impression will be sent to our lab where your new restoration will be crafted.  While this new tooth is created, Dr. Sheth will provide you with a temporary restoration.  Our temporary restorations will resemble your natural teeth so that you can continue with your daily life without worrying about a missing or incompatible tooth.</p>
<p>During your second visit to the office, Dr. Sheth will proceed with the placement of your final restoration.  This crown will be fitted comfortably into the mouth. We will make every effort to ensure that the new tooth feels exactly like one of your natural teeth.  The final step in the process is to cement the crown into your mouth, leaving you with a beautifully restored smile.</p>
<p><img src={this.state.crowns} alt="crows-aurora-denatal-family" class="imgborder" style={{marginLeft : '40%'}}/></p><br/>
<strong>Dental Crowns Cost</strong><br/>
Please call our office at 630-820-8550 or schedule an appointment for pricing information.  Our staff will be happy to answer any question you might have about Crowns.  We run special pricing from time to time, so don’t miss out our monthly specials.
</div>
<Footer></Footer>
            </div>
        )
    }
}

export default Crowns;