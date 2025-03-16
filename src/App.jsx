// App.jsx
import "./index.css";

// App.jsx
import "./index.css";

function App() {
  return (
    <div className="app">
      <h1>🌴 Farm Away 💼</h1>
      <Form />
      <PackingList />
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

function PackingList() {
  return (
    <div className="list">
      <ul>
        <li>
          <span>1 Socks</span>
          <button>❌</button>
        </li>
        <li>
          <span>2 Charger</span>
          <button>❌</button>
        </li>
      </ul>
    </div>
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
