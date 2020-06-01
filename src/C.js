import React, { Component } from 'react';

import  './c.css';





class C extends Component{


    render(){
        

        return(

        //   Indicators
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
      </ol>
      {/* 1st slide */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src="mainpagepic1.png" alt="First slide" />
          <div className="carousel-caption" s>
            <h3 className="h3-responsive" >Plethora Of Brands</h3>
            <p className='revitalizepara'>Revitalize Your Looks</p>
          </div> 
          
        </div>
        {/* 2nd slide */}
        <div className="carousel-item" >
          <img className="d-block w-100" src="mainpagepic2.png" alt="Second slide" />
          <div className="carousel-caption" s>
            <h3 className="h3-responsive" >Plethora Of Brands</h3>
            <p className='revitalizepara'>Revitalize Your Looks</p>
          </div> 
       
        </div>
        {/* 3rd slide */}
        <div className="carousel-item">
          <img className="d-block w-100" src="mainpagepic3.jpg" alt="Third slide" />
          <div className="carousel-caption" s>
            <h3 className="h3-responsive" >Plethora Of Brands</h3>
            <p className='revitalizepara'>Revitalize Your Looks</p>
          </div> 
       
        </div>
      </div>
      {/* controllers */}
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
      
        )
    }

}
export default C;