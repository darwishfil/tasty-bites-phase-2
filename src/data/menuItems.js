import burger from "../assets/burger.jpeg";
import pizza from "../assets/pizza.jpeg";
import salad from "../assets/salad.jpeg";
import fries from "../assets/fries.jpeg";
import cake from "../assets/cake.jpeg";
import lemonade from "../assets/lemonade.jpeg";

export const menuItems = [
  {
    id: 1,
    name: "Classic Burger",
    category: "Main Dish",
    price: 8,
    image: burger,
    description: "Juicy beef burger with fresh vegetables and house sauce.",
  },
  {
    id: 2,
    name: "Cheese Pizza",
    category: "Main Dish",
    price: 10,
    image: pizza,
    description: "Freshly baked pizza with melted cheese and tomato sauce.",
  },
  {
    id: 3,
    name: "Fresh Salad",
    category: "Healthy",
    price: 6,
    image: salad,
    description: "A light salad with fresh vegetables and olive oil dressing.",
  },
  {
    id: 4,
    name: "Crispy Fries",
    category: "Side Dish",
    price: 4,
    image: fries,
    description: "Golden crispy fries served with ketchup.",
  },
  {
    id: 5,
    name: "Chocolate Cake",
    category: "Dessert",
    price: 5,
    image: cake,
    description: "Soft chocolate cake with rich chocolate flavor.",
  },
  {
    id: 6,
    name: "Fresh Lemonade",
    category: "Drinks",
    price: 3,
    image: lemonade,
    description: "Cold homemade lemonade made with fresh lemons.",
  },
];