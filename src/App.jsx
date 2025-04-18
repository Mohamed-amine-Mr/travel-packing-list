import { useState } from "react";
import "./index.css";

function App() {
  const [items, setItems] = useState([]); // State to manage the list of items
  function handleAddItems(item) {
    setItems((items) => [...items, item]); // Add the new item to the list
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id)); // Remove the item with the matching ID
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map(
        (item) => (item.id === id ? { ...item, packed: !item.packed } : item) // Toggle packed status
      )
    );
  }
  return (
    <div className="app">
      <h1>🌴 Farm Away 💼</h1>
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
}
function Form({ onAddItems }) {
  const [description, setDescription] = useState(""); // State for the item description
  const [quantity, setQuantity] = useState(1); // State for the item quantity

  function handleSubmit(e) {
    e.preventDefault(); // Prevent the form from refreshing the page

    if (!description) return; // Don't add an item if the description is empty

    const newItem = {
      id: Date.now(), // Unique ID for each item
      description,
      quantity,
      packed: false, // Default packed status
    };

    onAddItems(newItem); // Call the function passed via props
    setDescription(""); // Reset the description input
    setQuantity(1); // Reset the quantity input
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
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
  );
}

function PackingList({ items, onDeleteItems, onToggleItem }) {
  const [sortBy, setSortBy] = useState("packed");
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            onDeleteItems={onDeleteItems}
            key={item.id}
            handleToggleItem={onToggleItem} // Pass onToggleItem as a prop
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => e.target.value}>
          <option value="input"> Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="description">Sort by packed status</option>
        </select>
      </div>
    </div>
  );
}

function Item({ item, onDeleteItems, handleToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => handleToggleItem(item.id)} // Toggle packed status
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}

function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your packing list 🚀</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈︎ "
          : `💼 You have ${numItems} items on your list, and you already packed
        ${numPacked}(${percentage}%)`}
      </em>
    </footer>
  );
}

export default App;
