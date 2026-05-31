function Cart({ cartItems, onClearCart }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

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

          <button className="clear-btn" onClick={onClearCart}>
            Clear Order
          </button>
        </>
      )}
    </aside>
  );
}

export default Cart;