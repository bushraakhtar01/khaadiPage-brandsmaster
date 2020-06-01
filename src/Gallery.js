import React, { Component } from 'react';
import './gallery.css';

import axios from 'axios';


class Gallery extends Component{
 
   // Fetch the list on first mount

    componentDidMount() {
      // $('.ui.sidebar')
      // .sidebar('toggle') ;
    
}





    render(){
  
        return (
          <div>
          <div className="ui sidebar inverted vertical menu">
          <a className="item">
            1
          </a>
          <a className="item">
            2
          </a>
          <a className="item">
            3
          </a>
        </div>
        <div className="pusher">
          {/* <!-- Site content !--> */}
        </div>
        </div>
      
                
        );
    }
  }
     
    
export default Gallery;