import React from "react";
import { useCart } from "./assets/Components/CartContext";

const CartView = () => {
  const { cart, removeFromCart, clearCart, calculateGrandTotal } = useCart();

  return (
    <div className="col-lg-12">
     
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.brand}</td>
              <td>${item.totalPrice.toFixed(2)}</td>
              <td>{item.qty}</td>
              <td>${(item.totalPrice * item.qty).toFixed(2)}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(item.name)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
  );
};

export default CartView;
