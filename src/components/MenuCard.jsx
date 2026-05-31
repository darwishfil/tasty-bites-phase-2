function MenuCard({ item, onAddToCart }) {
  return (
    <article className="menu-card">
      <img src={item.image} alt={item.name} />

      <div className="menu-card-content">
        <h3>{item.name}</h3>
        <p>{item.description}</p>

        <div className="menu-card-bottom">
          <span>${item.price}</span>
          <button onClick={() => onAddToCart(item)}>Add to Order</button>
        </div>
      </div>
    </article>
  );
}

export default MenuCard;