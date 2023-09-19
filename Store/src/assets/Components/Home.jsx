import React from "react";
import { data } from "../../Data";
import Footer from "../../Footer";
import { useCart } from "./CartContext";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";

const Home = () => {
  const { addToCart } = useCart();

  return (
    <div style={{backgroundColor:" #e1e1e1" }}  id="home"  >
     {/* <div className="container " 
     id="searchbar"
     >

     </div> */}



      <div className="row"  >
        <div className="col-12" >
          <div className="row">
            {data.map((product) => (
              <div className="col-lg-3 col-md-4 col-sm-6 col-xsm-6 mt-2" id="hcard" key={product.id}>
                <div className="card ml-5 mt-5"  style={{ width: "15rem" , maxHeight:"430px" }}>
                  <img
                    src={product.img}
                    className="card-img-top"
                    style={{ height:"250px" }}
                    alt="..."
                  />
                  <div className="card-body" style={{height:"200px"}}>
                    <h5 className="card-title">{product.name}</h5>
                    <h6 className="mt-2 mb-2 text-muted">
                      Price: ${product.price}
                    </h6>
                    <button
                      className="btn mr-2"
                      style={{backgroundColor:"yellow" , color:"gray"}}
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

        {/* <Cart /> */}
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
