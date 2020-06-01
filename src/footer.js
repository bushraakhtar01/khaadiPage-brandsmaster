import React, { Component } from 'react';
import './gallery.css';




class Footer extends Component{


    render(){
        

        return(
          <div className="container-fluid footer" >

               {/* footer div  */}
              <div className="row">
               <div className='col-md-3 footercolumn'    >
                 
                   <ul  >
                   <li className="li1" > 
                           Help
                       </li>
                       <li className="footerlis"  >
                           Contact US
                       </li>
                       <li className="footerlis"  >
                           Privacy Policy
                       </li>
                   </ul>
                   </div>

                   <div className='col-md-3 footercolumn'   >
                 
                 <ul  >
                 <li className="li1" > 
                        Our Company
                     </li>
                     <li className="footerlis"  >
                        About Us
                     </li>
                     <li className="footerlis"  >
                        Terms &amp; Conditions
                     </li>
                 </ul>

             
              

             </div>


               
                

               <div className='col-md-3 footercolumn'   >
                 
                 <ul  >
                 <li className="li1" > 
                         Customer Care
                     </li>
                     <li className="footerlis"  >
                         0316-0022324
                     </li>
                     <li className="footerlis"  >
                         care@Pehnaway.com
                     </li>
                 </ul>

             
              

             </div>
             <div className='col-md-3 socialmediacol'   >
                 
                 <ul  id="some" >
                 <li className="li1" > 
                       Follow Us
                     </li>
                     <li className="socialmedia" >
                     <i class="facebook icon big" ></i>
                     </li>
                     <li  className="socialmedia"  >
                     <i class="twitter icon big" ></i>
                     </li>

                     <li className="socialmedia">
                     <i class="youtube icon big"></i>
                     </li>
                     <li className="socialmedia">
                     <i class="instagram icon big"></i>
                     </li>
                 </ul>

             
              

             </div>
       

                </div>

                <div className='row'>
                    <div className="col lastdiv" >
                        <p className="lastfooter">
                            Copyright 	&copy; Pehnaway Pakistan Limited. All Rights Reserved
                        </p>
                    </div>

                </div>
            


              

        


          































          </div>

   
      
        )
    }

}
export default Footer;