import React, { Component } from 'react';
import img from './1.jpg'

import './home.css';
class Home extends Component {
    state = {  }
    render() { 
        return(
            <div className="App">
            <h1 class="text-center text-info ">Welcome-come to Movies Site</h1> 
            <h2></h2>
             
             <img src={img}/>
          
          </div>
      
        )
    }
}
 
export default Home;