// App.jsx
import { useState } from "react";
import "./index.css";

function App() {
  const [items, setItems] = useState([]); // State to manage the list of items
  const [description, setDescription] = useState(""); // State for the item description
  const [quantity, setQuantity] = useState(1); // State for the item quantity

  function handleAddItem(e) {
    e.preventDefault(); // Prevent the form from refreshing the page

    if (!description) return; // Don't add an item if the description is empty

    const newItem = {
      id: Date.now(), // Unique ID for each item
      description,
      quantity,
      packed: false, // Default packed status
    };

    setItems((items) => [...items, newItem]); // Add the new item to the list
    setDescription(""); // Reset the description input
    setQuantity(1); // Reset the quantity input
  }

  return (
    <div className="app">
      <h1>🌴 Farm Away 💼</h1>
      <form className="add-form" onSubmit={handleAddItem}>
        <h3>What do you need for your trip?</h3>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))} // Update quantity state
        >
          {Array.from({ length: 20 }, (_, i) => (
            <option value={i + 1} key={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)} // Update description state
        />
        <button>Add</button>
      </form>
      <div className="list">
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <span>
                {item.quantity} {item.description}
              </span>
              <button>❌</button>
            </li>
          ))}
        </ul>
      </div>
      <footer className="stats">
        <em>
          You have {items.length} items on your list, and you already packed 0.
        </em>
      </footer>
    </div>
  );
}

export default App;
