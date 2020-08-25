import React, {Component} from 'react';
import backendconfig from '../backendConfig';
import Footer from './footer';
class Whitening extends Component{
   
    constructor(props){
        super(props);
    }
    //Call the Will Mount to set the auth Flag to false
    componentWillMount(){
        this.setState({
            whitening2 : backendconfig+"/uploads/whitening2.png"
        })
    }


    render(){       
        
        return(
            <div class="container">
                <p style={{textAlign: "center"}} class="h2"><font color="orange">Teeth Whitening</font></p>
                <div class="right">
<img src={this.state.whitening2} class="imgborder" alt="whitening" style={{ marginLeft : '43%'}}/><br/>
<div class="h3">
Tooth whitening is a cosmetic dentistry procedure that lightens teeth and helps to remove stains and discoloration. It is the most popular treatment by both men and women alike and the treatments available range from one-hour one-time dental visits to take-home do-it-yourself kits. Tooth whitening is popular because it can significantly improve the appearance of your teeth at much less cost and inconvenience than other techniques. Aurora Family Dental offers take home do-it-yourself kits and also offers one hour in office treatment.<p></p>
<p>Yellow or stained teeth are a common problem most Americans will develop at some point in their lives but can remedy with proper treatment. Our teeth contain enamel, a porcelain-like surface that started out sparkling white. Tooth enamel is designed to protect the teeth from the effects of chewing, gnashing, trauma and acid attacks caused by sugar. Over time, our enamel starts to hold stains within its pores and becomes more transparent and permits the yellow color of dentin, the tooth’s core material, to show through. As more stains and debris accumulate because of normal wear and tear and eating habits, the teeth develop a dull, lackluster appearance. Tooth whitening exists to remove the stains and debris associated with diet and aging.</p>
<p><strong>Causes of Tooth Staining</strong><br/>
Food and diet are the most common culprits of teeth discoloration, but there are a number of causes that can incite discolored teeth. Below is a list of the top causes of teeth stains and discoloration according to a representative of the American Dental Association:</p>
<p><strong>Medicine-</strong> Some over-the-counter medications and antibiotics can dull your teeth. Minocycline, a derivative of Tetracycline (a bacteria fighting antibiotic) has been shown to turn teeth yellow in small children and can cause a permanent bluish-gray stain in adults. There are certain antihistamines that can also discolor teeth. Your dentist will able to tell you if your medications are impacting the color of your teeth and if there may be alternatives to their use.</p>
<p><strong>Excessive Fluoride-</strong> Fluoride in large concentrations can cause chalky white spots to appear on your teeth. Fluoride is generally good for teeth however people can get too much fluoride from drinking water with high concentrations of fluoride, or from excessive use of fluoride-containing toothpastes. A good suggestion would be to use a sensible pea-sized amount of toothpaste each time you brush.</p>
<p><strong>Genetics and Aging-</strong> As you age the enamel of your teeth wears thin and the natural yellow or brown color of the underlying dentin layer shows through. Also genetics play a role as some people just have naturally brighter or thicker enamel than others. Dental Damage- Trauma such as injury or falls can produce sizable cracks in the teeth, which collect large amounts of stains and debris.</p>
<p><strong>Dark Drinks-</strong> A good rule of thumb here is that “any drink that can stain your carpet can stain your teeth.” Coffee, tea, and red wine are well known for their tooth staining capabilities; however other dark liquids such as fruit juice, soda, and even beer can damage your smile. Drinking through a straw to protect your front teeth or swigging some water around after drinking dark fluids can offset their staining power.</p>
<p><strong>Colorful Foods-</strong> The habitual consumption of deep colored heavily pigmented foods such as cherries, blueberries, cranberries and soy sauce can quickly stain teeth. To avoid this brush your teeth soon after eating these types of foods.</p>
<p><strong>Bad Oral Hygiene-</strong> An obvious reason for dull or lackluster teeth, poor oral hygiene means that stain-producing substances are not routinely removed from your teeth and will allow bacteria to build up. The more you brush and floss properly the better chance you have at fighting off yellow and green stains that can result from bad habits.</p>
<p><strong>Teeth Whitening Options &amp; Costs: Teeth Whitening at Home and at the Dentist</strong><br/>
<strong>In-Office Whitening-</strong> In office whitening offers the benefits of significant color change in the shortest period of time. This process involves the use of a high-concentration peroxide gel, applied to the teeth by your dentist who ensures that the gums and mouth are protected from application. The gel remains on the teeth for several 15 to 20 minute intervals that add up to about an hour. The advantage with these procedures is that the results are immediate.  Please call our office at 630-820-8550 to schedule an appointment.</p>
<p><strong>Take-Home Kits-</strong> Take-home kits offer the convenience of at your leisure teeth-whitening and provide professional results. The kits incorporate lower-concentrate peroxide gels that are applied in custom made trays and worn in the mouth over night or for a select time period during the day. These can only be provided by Dr. Sheth</p>
<p>In order to help you smile more, we are running specials right now for 1 hour in office whitening.  Please call our office at 630-820-8550 for pricing information.
</p></div></div>
<Footer></Footer>
            </div>
        )
    }
}

export default Whitening;