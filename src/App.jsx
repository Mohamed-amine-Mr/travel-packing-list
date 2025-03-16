// App.jsx
import { useState } from "react";
import "./index.css";

function App() {
  const [items, setItems] = useState([]); // State to manage the list of items

  return (
    <div className="app">
      <h1>🌴 Farm Away 💼</h1>
      <Form />
      <PackingList items={items} /> {/* Pass items as a prop */}
      <Stats />
    </div>
  );
}

function Form() {
  return (
    <form className="add-form">
      <h3>What do you need for your trip?</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => (
          <option value={i + 1} key={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..." />
      <button>Add</button>
    </form>
  );
}

function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} />
          // Pass item as a prop
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have 2 items on your list, and you already packed 0.</em>
    </footer>
  );
}

export default App;
