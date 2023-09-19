import React from "react";
import { useCart } from "./assets/Components/Cartcontext";

const Cart = () => {
  const { cart, removeFromCart, clearCart, calculateGrandTotal } = useCart();

  return (
    <div className="col-lg-3" style={{borderLeft:"#19747E 2px solid"}}>
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Shopping Cart</h5>
          <ul className="list-group">
            {cart.map((item, index) => (
              <li key={index} className="list-group-item">
                <div className="row">
                  <div className="col-md-4">
                    <img src={item.img} alt={item.name} className="img-fluid" />
                  </div>
                  <div className="col-md-8">
                    <h6 className="card-subtitle mb-2 text-muted">
                      {item.name}
                    </h6>
                    <p className="card-text">
                      Price: ${item.totalPrice.toFixed(2)}
                    </p>
                    <p className="card-text">Quantity: {item.qty}</p>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeFromCart(item.name)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Grand Total</h5>
              <p className="card-text">
                Total: ${calculateGrandTotal().toFixed(2)}
              </p>
            </div>
          </div>
          <button
            className="btn btn-danger"
            onClick={clearCart}
            style={{ marginTop: "10px" }}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
