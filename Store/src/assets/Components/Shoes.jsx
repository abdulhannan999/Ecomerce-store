import React from "react";
import { data } from "../../Data";
import { useCart } from "./CartContext";
import Footer from "../../Footer";
import "./App.css";

const Shoes = ({ category }) => {
  const { addToCart } = useCart();
  const filteredProducts = data.filter(
    (product) => product.category === category
  );

  return (
    <div style={{backgroundColor:" #e1e1e1" }} id='shoes'>
      <div className="row" >
        <div className="col-lg-12">
          <div className="row">
            {filteredProducts.map((product) => (
              <div className="col-lg-3 col-md-4 col-sm-6 mt-2" key={product.id} id="card3">
                <div className="card ml-5 mt-5" style={{ width: "14rem" }}>
                  <img
                    src={product.img}
                    className="card-img-top"
                    style={{ height: "200px" }}
                    alt="..."
                  />
                  <div className="card-body" style={{height:"200px"}}>
                    <h5 className="card-title">{product.name}</h5>
                    <h6 className="mt-2 mb-2 text-muted">
                      Price: ${product.price}
                    </h6>
                    <button
                    style={{
                      backgroundColor:"yellow"
                      ,
                      color:"gray"
                      , marginTop:"50px"
                    }}
                      className="btn mr-2"
                      onClick={() => addToCart(product)} // Add to Cart
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Cart Items */}
        
          
        
      </div>
      <Footer/>
    </div>
  );
};

export default Shoes;
