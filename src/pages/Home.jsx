import { Link } from "react-router-dom";
import burger from "../assets/burger.jpeg";
import pizza from "../assets/pizza.jpeg";
import cake from "../assets/cake.jpeg";

function Home() {
  return (
    <main>
      <section className="hero">
        <div>
          <p className="small-title">Fresh food in Bchamoun</p>
          <h1>Welcome to Tasty Bites</h1>
          <p>
            A warm family restaurant serving fresh meals, delicious desserts,
            and homemade drinks.
          </p>

          <Link className="main-btn" to="/menu">
            View Menu
          </Link>
        </div>
      </section>

      <section className="section">
        <h2>Today’s Special</h2>
        <p className="section-intro">
          Enjoy our most loved dishes prepared fresh every day.
        </p>

        <div className="feature-grid">
          <div className="feature-card">
            <img src={burger} alt="Burger" />
            <h3>Classic Burger</h3>
            <p>Juicy burger with fresh vegetables and house sauce.</p>
          </div>

          <div className="feature-card">
            <img src={pizza} alt="Pizza" />
            <h3>Cheese Pizza</h3>
            <p>Fresh pizza with melted cheese and tomato sauce.</p>
          </div>

          <div className="feature-card">
            <img src={cake} alt="Cake" />
            <h3>Chocolate Cake</h3>
            <p>Rich chocolate dessert for a sweet ending.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;