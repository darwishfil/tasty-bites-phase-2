import { useState } from "react";

function Cart({ cartItems, onClearCart }) {
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  function handleConfirmOrder() {
    if (cartItems.length === 0) {
      setConfirmationMessage("Please add at least one item before confirming your order.");
      return;
    }

    setConfirmationMessage(
      `Your order has been confirmed successfully! Thank you for ordering from Tasty Bites. Your total is $${total}.`
    );

    onClearCart();
  }

  function handleClearOrder() {
    onClearCart();
    setConfirmationMessage("");
  }

  return (
    <aside className="cart-box">
      <h2>Your Order</h2>

      {cartItems.length === 0 ? (
        <p>No items added yet.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={`${item.id}-${index}`}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>

          <h3>Total: ${total}</h3>

          <button onClick={handleConfirmOrder}>Confirm Order</button>

          <button className="clear-btn" onClick={handleClearOrder}>
            Clear Order
          </button>
        </>
      )}

      {confirmationMessage && (
        <div className="order-message">
          {confirmationMessage}
        </div>
      )}
    </aside>
  );
}

export default Cart;