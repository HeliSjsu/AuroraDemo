import React,{Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Main from './Components/main';

//App Component
class App extends Component {
  render() {
    return (
      //Use Browser Router to route to different pages
      <BrowserRouter>
        <div>
          {/* App Component Has a Child Component called Main*/}
          <Main/>
        </div>
      </BrowserRouter>
    
    );
  }
}


export default App;
