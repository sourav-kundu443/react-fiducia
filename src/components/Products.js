import React from "react";
import TubeLight from "../images/tubelight.png";
import LedLight from "../images/ledlight.png";
import LedHighBay from "../images/ledhighbay.png";

const Products = () => {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-8  text-center mt-5 mb-3">
          <h3 className="b">Fiducia</h3>
          <p>The trust is in the name. A home-grown startup, Fiducia - Powered by LeSol, engages with the brands to give
            identity to the products. A simple configurator enables you to put your brand to any product and start
            marketing from the word get-go. </p>
        </div>
      </div>

      <div className="row justify-content-center mb-5 mt-3">
        <div className="col-md-3 col-8 justify-content-center text-center pt-3 pb-3 ms-3 border mt-3 my-card">
          <img src={TubeLight} className="img-fluid card-image" alt="" />
          <p className="quick-shop">Quick Shop</p>
          <p className="text-uppercase">old faithful shop</p>
          <h4>Tube Light</h4>
        </div>
        <div className="col-md-3 col-8 justify-content-center text-center pt-3 pb-3 ms-3 border mt-3 my-card">
          <img src={LedLight} className="img-fluid card-image" alt="" />
          <p className="quick-shop">Quick Shop</p>
          <p className="text-uppercase">old faithful shop</p>
          <h4>Street Light</h4>
        </div>
        <div className="col-md-3 col-8 justify-item-center text-center pt-3 pb-3 ms-3 border mt-3 my-card">
          <img src={LedHighBay} className="img-fluid card-image" alt="" />
          <p className="quick-shop">Quick Shop</p>
          <p className="text-uppercase">old faithful shop</p>
          <h4>HIgh bay Light</h4>
        </div>
      </div>
      <div class="view-more">
        <a href="#">
          View More
          <i class="bi bi-arrow-right" style={{fontSize: "35px;"}}></i>
        </a>
      </div>
    </div>
  )
}

export default Products;