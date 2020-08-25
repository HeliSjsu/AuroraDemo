import React, {Component} from 'react';
import image1 from '../images/001.png';
import image2 from '../images/002.jpg';
import image3 from '../images/003.jpg';
import BackgroundSlideshow from 'react-background-slideshow'
import Header from './header';
import Navbar from './navbar';
import AboutUs from './aboutus';
import Services from './services';
import backendconfig from '../backendConfig';


class Home extends Component{
   
    constructor(props){
        super(props);
        this.state = {
          image1 : backendconfig +"/uploads/image2.png",
          image2 : backendconfig +"/uploads/image5.jpg",
          image3 : backendconfig + "/uploads/image6.jpg",
          image4 : backendconfig + "/uploads/image7.jpg",
         // image5 : backendconfig + "/uploads/slide5.png",
         // image5 : backendconfig + "/uploads/slide6.png"
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
              <Header></Header><br/>
              <Navbar></Navbar>
              
           
  <div id="myCarousel" class="carousel slide" data-ride="carousel" >
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    <div class="carousel-inner">
      <div class="item" style={{width : '100%' ,height :'350px'}}>
        <img src={this.state.image1} alt="aurora dental" class="image-fluid" />
      </div>

      <div class="item active" style={{width : '100%' ,height :'400px'}}>
        <img src={this.state.image2} alt="dental clinic" class="image-fluid"  />
      </div>
    
      <div class="item " style={{width : '100%' ,height :'400px'}}>
        <img src={this.state.image3} alt="dental clinic" style={{width : '100%'}}  />
      </div>

    </div>

    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a></div>  
</div>
        )
    }
}

export default Home;