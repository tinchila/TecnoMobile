import React from 'react';

const Carousel = () => {
    return (
        <div>

<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/assets/images/Banner1.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/assets/images/Banner2.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/assets/images/Banner3.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/assets/images/Banner4.png" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


        </div>

    )
}


export default Carousel