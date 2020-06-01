import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
// import  './top.css';





class Top extends Component{

  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      data: [],
      perPage: 5,
      currentPage: 0
};
}

receivedData() {
  axios.get(`https://jsonplaceholder.typicode.com/photos`)
      .then(res => {

          const data = res.data;
          const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
          const postData = slice.map(pd => <React.Fragment>
              <p>{pd.title}</p>
              <img src={pd.thumbnailUrl} alt=""/>
          </React.Fragment>)

          this.setState({
              pageCount: Math.ceil(data.length / this.state.perPage),
             
              postData
          })
      });
}
handlePageClick = (e) => {
  const selectedPage = e.selected;
  const offset = selectedPage * this.state.perPage;

  this.setState({
      currentPage: selectedPage,
      offset: offset
  }, () => {
      this.receivedData()
  });

};
componentDidMount() {
  this.receivedData()
}
    render(){
        

        return(

          <div>
                {this.state.postData}
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
            </div>
          // <div className="container-fluid" >

          //   {/* Top trending */}

          // <div className="row">
          //   <div className="col">
          //     <h2>Top Trending</h2>
          //   </div>
          //  </div>

          // {/* Choose the best */}

          // <div className="row">
            
          //   <div className="col">
          //     <p>Choose the best, wear the elegance</p>
          //   </div>
          //   </div>

          //   {/* 1st row */}

          //   <div className="row">

          //     {/* 1st img */}
          //     <div className="col-md-3 col-6">
          //     <div className="card"  >
          //   <img className="card-img-top" src="PicCarousel10.jpg"></img>
  
          //   </div>
              
          //     </div>
          //     {/* 2nd img */}
          //     <div className="col-md-3 col-6">
          //     <div className="card" >
          //   <img className="card-img-top" src="PicCarousel1.jpg"></img>
  
          //   </div>
              
          //     </div>

          //   {/* 3rd img */}
          //   <div className="col-md-3 col-6">
           
          //     <div className="card" >
          //   <img className="card-img-top" src="PicCarousel12.jpg"></img>
  
          //   </div>
              
          //     </div>
            
            
           
          //  {/* 4th img */}
          // <div className="col-md-3 col-6">
          //     <div className="card" >
          //   <img className="card-img-top" src="PicCarousel6.jpg"></img>
  
          //   </div>
              
          //     </div>
          //     </div>

          //    {/* 5th img */}

          //   <div className="row">
          //     <div className="col-md-3 col-6">
          //     <div className="card" >
          //   <img className="card-img-top" src="PicCarousel2.jpg"></img>
  
          //   </div>
              
          //     </div>


          //    {/* 6th img */}
          //   <div className="col-md-3 col-6">
           
          //     <div className="card" >
          //   <img className="card-img-top" src="PicCarousel7.jpg"></img>
  
          //   </div>
              
          //     </div>
            
          //   {/* 7th img */}
           
         
          // <div className="col-md-3 col-6">
          //     <div className="card" >
          //   <img className="card-img-top" src="PicCarousel11.jpg"></img>
  
          //   </div>
               
          //      {/* 8th img */}
          //     </div>
          //     <div className="col-md-3 col-6">
          //     <div className="card" >
          //   <img className="card-img-top" src="PicCarousel9.jpg"></img>
  
          //   </div>
              
          //     </div>

          



          // </div>































    

   
      
        )
    }

}
export default Top;