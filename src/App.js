import React, { Component } from 'react';

import  './style.css';
import './scroll.js';




class App extends Component{
       

    render(){
        

        return(

            <div className="container-fluid" id='container' >
               {/* logo row */}
               <div className="row">
                  <div className="col">
                  <center><img src="logo1.jpg" className="mainlogo"/></center>
                
                  </div>

               </div>
              
                  {/* sign in , register and cart row */}

                <div className="row" >
                  {/* <div className="col-md-11 col-9" style={{textAlign:'right'}} >  <i class="user outline icon"></i>
                    <p style={{display:'inline-block'}}> Sign in &nbsp; /Register</p>
                  </div>
                  {/* <div className="col-md-2 col-3" style={{backgroundColor:'pink', textAlign:'center'}}><i class="edit outline icon"></i>
                  
                     Register
                  </div> */}
                   {/* <div className="col-md-1 col-3" style={{ textAlign:'left'}}>
                      <i class="opencart icon"></i>
                     <p style={{display:'inline-block'}}>Cart</p>
                  </div>  */}

                  <div className="col " id="signinpara"  >
                     <ul style={{float:'right'}} >
                        <li className="login-cart"  ><i class="user outline large icon"></i> &nbsp; &nbsp; </li>
                        <li className="login-cart"><i class="shopping cart large icon"></i></li>
                        
                     </ul>
                  </div>
                   </div>
                      {/* New arrivals , brands row */}

                      {/* <div className="row" id="newarrivals" >
                     <div className='col-md-4 col-4'  style={{textAlign:'right'}}>
                     NEW ARRIVALS

                     </div>
                     <div className='col-md-1 col-4' style={{textAlign:'center'}} >
                        FANCY

                     </div>
                     <div className='col-md-1 col-4' style={{textAlign:'center'}} >
                        STITCHED

                     </div>
                     <div className='col-md-1 col-3' style={{textAlign:'center'}}>
                       KURTI

                     </div>
                     <div className='col-md-1 col-3' style={{textAlign:'center'}}>
                     UNSTITCHED


                     </div>
                     <div className='col-md-1 col-3' style={{textAlign:'center'}}>
                        LAWN

                     </div>
               
                     <div className='col-md-3 col-3' >
                        Brands

                     </div>
                   

               </div> */}
               <nav className="navbar navbar-expand-lg navbar-light " >
  <button  className="navbar-toggler navtogglebutton" type="button"  data-toggle="collapse"  data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"  ></span>
  </button>
  
  <div class="collapse navbar-collapse" id="navbarNav"   >
    <ul className="navbar-nav" >
       
      <li class="nav-item" >
        <p  > NEW ARRIVALS &nbsp; &nbsp;</p>
        
   
      </li>
      <li class="nav-item">
        <p > UNSTITCHED &nbsp; &nbsp;</p>
        
      </li>
      <li class="nav-item">

        <p > STITCHED &nbsp; &nbsp;</p>
      </li>
      <li class="nav-item">
      
        <p >FANCY &nbsp; &nbsp;</p>
      </li>
      <li class="nav-item">
      
          <p > KURTI &nbsp; &nbsp;</p>
      </li>
      <li class="nav-item">
      
        <p > BRANDS &nbsp; &nbsp;</p>
      </li>
    
    </ul>
  </div>
</nav>
        

              </div>
      
        )
    }

}
export default App;