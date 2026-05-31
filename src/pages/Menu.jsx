import { useState } from "react";
import MenuCard from "../components/MenuCard";
import Cart from "../components/Cart";
import { menuItems } from "../data/menuItems";

function Menu() {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cartItems, setCartItems] = useState([]);

  const categories = ["All", ...new Set(menuItems.map((item) => item.category))];

  const filteredItems = menuItems.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  function handleAddToCart(item) {
    setCartItems([...cartItems, item]);
  }

  function handleClearCart() {
    setCartItems([]);
  }

  return (
    <main className="section">
      <h1>Our Menu</h1>
      <p className="section-intro">
        Search, filter, and add your favorite dishes to your order.
      </p>

      <div className="menu-tools">
        <input
          type="text"
          placeholder="Search for a dish..."
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />

        <select
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
        >
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="menu-layout">
        <div className="menu-grid">
          {filteredItems.map((item) => (
            <MenuCard
              key={item.id}
              item={item}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        <Cart cartItems={cartItems} onClearCart={handleClearCart} />
      </div>
    </main>
  );
}

export default Menu;