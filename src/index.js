import React, { Component } from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import C from './C';
import Top from './Top';
import Gallery from './Gallery';
import Div from './div';
import Footer from './footer';
import KhaadiUI from './KhaadiUI';


class Index extends Component{
 render(){
     return(
       <div>
         {/* <Top/> */}
         <KhaadiUI/>
         {/* <Gallery/> */}
           {/* <App/>
           <C/>
           <Top/>
           <Gallery/>
           <Div/>
           <Footer/> */}
       </div>
     )
 }


}

ReactDOM.render( <Index/>,document.querySelector('#root')
);
  