import React, {Component} from 'react';
import Footer from './footer';

class Bridges extends Component{
   
    constructor(props){
        super(props);
    }

    render(){       
        
        return(
            <div class="container">
                <p style={{textAlign: "center"}} class="h2"><font color="orange">Dental Bridge</font></p>
                <div class="right h3">
A bridge is a tooth replacement alternative to implants. The teeth on either side of the space are covered with crowns and a false tooth is suspended between them. The only downside to a bridge is that it requires more home maintenance and for some can be more difficult to keep clean.<p></p>
<p>Instead of placing a bridge made of porcelain with a metal base, which, years later, can often result in unsightly dark lines at the gum line, Art of Modern Dentistry can now restore your smile with an all-porcelain bridge.</p>
<p>An all-porcelain bridge still uses adjacent teeth for support, but will not show a dark line where the bridge meets the gums. Many all-porcelain bridges can be bonded in place, which gives a tighter seal and more accurate fit.
</p></div>
<Footer></Footer>
            </div>
        )
    }
}

export default Bridges;