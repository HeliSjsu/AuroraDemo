import React, {Component} from 'react';
import backendconfig from '../backendConfig';
import Footer from './footer';
class Bonding extends Component{
   
    constructor(props){
        super(props);
    }
    //Call the Will Mount to set the auth Flag to false
    componentWillMount(){
        this.setState({
            bonding1 : backendconfig+"/uploads/bonding1.jpg",
            bonding2 : backendconfig+"/uploads/bonding2.jpg",
            bonding3 : backendconfig+"/uploads/bonding3.jpg",
            bonding4 : backendconfig+"/uploads/bonding4.jpg"
        })
    }


    render(){       
        
        return(
            <div class="container">
                <p style={{textAlign: "center"}} class="h2"><font color="orange">Dental Bonding</font></p>
                <div class="right h3">
<strong>Teeth Bonding: A Dental Tooth Restoration Overview</strong><br/>
Tooth bonding is the application of a tooth-colored resin material using adhesives and a high intensity curing light. The procedure gets its name because materials are bonded to the tooth. Bonding is typically used for cosmetic purposes to improve the appearance of a discolored or chipped tooth. It is also used to close spaces between teeth, to make teeth look longer or to change the shape or color of teeth. Often times bonding is used as a cosmetic alternative to amalgam fillings, or to protect a portion of the tooth’s root that has been exposed when gums recede.<p></p>
<p><strong>Teeth Bonding Uses</strong><br/>
<b>Dental bonding can be considered to fix the following dental issues:</b></p>
<ul class="ul">
<li>To repair decayed teeth (composite resins are used to fill cavities)</li>
<li>To repair chipped or cracked teeth</li>
<li>To improve the appearance of discolored teeth</li>
<li>To close spaces between teeth</li>
<li>To make teeth look longer</li>
<li>To change the shape of teeth</li>
<li>As a cosmetic alternative to amalgam fillings</li>
<li>To protect a portion of the tooth’s root that has been exposed when gums recede</li>
</ul>
<div class="row">
    <div class="col-sm-2">
        <br/><br/>
        <img src={this.state.bonding1}  class="imgborder"  alt="dental-bonding" class="img_left"/><br/>
        <img src={this.state.bonding2}  class="imgborder" alt="dental-bonding" class="img_left"/><br/>
        <img src={this.state.bonding3} class="imgborder"  alt="dental-bonding" class="img_left"/><br/>
        <img src={this.state.bonding4} class="imgborder" alt="dental-bonding" class="img_left"/>

    </div>
    <div class="col-sm-10">
    <p><strong>Dental Bonding Procedure</strong><br/>
Dental bonding takes little to no preparation, and the use of anesthesia if often not necessary unless the bonding is being used to fill a decayed tooth. Your dentist will match the shade of your existing teeth to select a composite resin color that will closely match the color of your tooth.</p>
<p><b>There are two forms of dental bonding: direct composite bonding and adhesive bonding</b></p>
<p>1. Direct Composite Bonding- Direct composite bonding is the process where dentists use tooth-colored composites (white or natural-looking materials) that they have in their offices to fill cavities, repair chips or cracks, close gaps between your teeth and build up the worn-down edges of teeth. The composite materials may also be directly applied and sculpted to the surfaces of teeth that show most prominently when you smile, for minimally invasive smile makeovers. In the dental world these are called direct composite veneers but generically known by most to be called “bonding.”</p>

    </div>
</div>
<p>2. Adhesive Bonding- Adhesive bonding as opposed to direct composite bonding is the process of attaching a restoration to a tooth. This method is commonly used for esthetic crowns,porcelain veneers, bridges and inlays/onlays.After Dr. Sheth has chosen a color that matches the shade of your teeth, she will roughen the surface of the tooth using a gentle phosphoric acid solution. Soon after the roughing agent is removed, a liquid bonding agent is applied. The tooth-colored putty-like resin is applied to the tooth, then molded and smoothed until it’s in the desired shape. The material is then hardened with an ultraviolet curing light, and the previous step is repeated until the filing or direct composite veneer has reached its final shape. Dr. Sheth will then polish the material until it matches the sheen of the rest of the tooth surface.</p>

<p><strong>Pros and Cons of Dental Bonding</strong><br/>
Pros- Dental bonding is one of the most common and least expensive of cosmetic dentistry procedures. It can usually be done in one short office visit unless multiple teeth are involved. Another advantage to bonding is that compared to veneersand crowns, it requires little to no removal of tooth enamel. Most procedures involving dental bonding do not require anesthesia.</p>
<p>Cons- The material used in dental bonding is not as strong as your real teeth, so biting on fingernails or chewing on pens can actually chip the material. Bonding only lasts a few years before it needs to be repaired and is not as strong as other restorative procedures, such as crowns, veneers, or fillings. It is also not as stain resistant as crowns.</p>
<p>Because there are some limitations to the restorative impacts that bonding can have, Dr. Neha Sheth may view it as best suited for small cosmetic changes, for temporary correction of cosmetic defects, and for correction of teeth in areas of very low bite pressure (for example, front teeth). Dr. Neha Shethwill be able to tell you if bonding is right for you or may make other recommendations relative to your personal conditions.</p>
<p><strong>Teeth Bonding Consultation</strong><br/>
A consultation with Dr. Neha Shethwill determine what dental problems can be solved with bonding. Dr. Sheth will conduct a thorough examination of your teeth that may involve x-rays and an evaluation of your teeth and gums. During your consultation, Dr. Sheth will discuss if you are a candidate for the cosmetic problems that bonding can resolve, such as decayed teeth, cracked or chipped teeth, gaps, tooth discoloration, “short teeth,” and more. If you have teeth that are extensively damaged your dentist may recommend other restorative or cosmetic procedures that meet more long-term goals.</p>
<p><strong>Caring for Bonded Teeth</strong><br/>
Bonded teeth require the same care as your natural teeth. The care necessary to maintain a healthy and beautiful smile is to keep good oral hygiene habits. Brushing at least twice a day and flossing are good ways to keep good oral health. Routine check-ups as recommended by Dr. Sheth should ensure clean teeth and a healthy smile.Because the material used in bonding can chip, try to avoid biting on hard objects that may cause damage. Biting your fingernails, chewing on pens, ice or other hard food objects should be avoided. If the tooth feels differently than when you had your procedure, you may have chipped the bond. Consult Dr. Sheth if this happens.</p>
<p><strong>Teeth Bonding Cost</strong><br/>
Costs of dental bonding vary depending on your specific dental conditions, amount of teeth that need cosmetic repair.  Please call our office at 630-820-8550 for more information or make an appointment with Dr. Sheth.  We will also check with your dental insurance provider to see if you are eligible for coverage.
</p>
</div>
<Footer></Footer>
            </div>
        )
    }
}

export default Bonding;