// 

import React from 'react';
import { data } from '../../Data';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../Footer';
import "./App.css"
import { useCart } from './CartContext';
const Shirts = ({ category }) => {
  const { addToCart } = useCart();
  const filteredProducts = data.filter((product) => product.category === category);

  return (
    <div  style={{backgroundColor:" #e1e1e1" }} id='shirts' >
    
      <div className="row" >
        <div className="col-lg-12">
          <div className="row">
            {filteredProducts.map((product) => (
              <div className="col-lg-3 col-md-4 col-sm-6  mt-2" key={product.id} id='card2'>
                <div className="card ml-5 mt-5" style={{ width: '16rem' }}>
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
                     style={{
                      backgroundColor:"yellow"
                      ,
                      color:"gray"
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

export default Shirts;
