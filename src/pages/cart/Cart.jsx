import React from "react";
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "../../redux/features/CartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  //remove from cart
  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };
  //increase cart quanity
  const handleIncrease = (id) => {
    dispatch(incrementQuantity(id));
  };
  //decrease cart quantity
  const handleDecrease = (id) => {
    dispatch(decrementQuantity(id));
  };

  const getTotalPrice = () => {
    let total = 0;
    cart.cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };
  return (
    <div className="container cart">
      <div className="title">
        <h1>Cart</h1>
      </div>
      <>
        {cart.cart.length === 0 ? (
          <div className="empty">
            <div className="empty-text">
              <p>Your cart is currently empty.</p>
            </div>
          </div>
        ) : (
          <div className="cart-content">
            <div className="table">
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.cart &&
                    cart.cart.map((item) => (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td> ${item.price}.00</td>
                        <td className="count">
                          <button onClick={() => handleDecrease(item.id)}>
                            {" "}
                            -{" "}
                          </button>
                          <div>{item.quantity}</div>
                          <button onClick={() => handleIncrease(item.id)}>
                            {" "}
                            +{" "}
                          </button>
                        </td>

                        {item.percentage ? (
                          <td className="total">
                            $
                            {(item.price -
                              (item.price * item.percentage) / 100) *
                              item.quantity}
                            .00
                          </td>
                        ) : (
                          <td className="total">
                            ${item.price * item.quantity}.00
                          </td>
                        )}
                        <td
                          onClick={() => handleRemove(item.id)}
                          className="cancel"
                        >
                          x
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="checkout">
              <div className="heading">
                <h3>Cart Totals</h3>
              </div>
              <div className="body">
                <div className="subtotal">
                  <span>Subtotal</span>
                  <span>${getTotalPrice()}.00</span>
                </div>
                <div className="total">
                  <span>Total</span>
                  <span>${getTotalPrice()}.00</span>
                </div>
                <div className="coupon">
                  <span>Have a coupon?</span>
                  <button>proceed to checkout</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default Cart;
