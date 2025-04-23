import "./index.css";
import React from "react";
import { useState } from "react";
import { Stats } from "./components/Stats";

const TravelList = () => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [items, setItems] = useState([]);

  function handleClear() {
    const confirmed = window.confirm("Are u sure u want to delete all items?");
    if (confirmed) setItems([]);
  }

  function handleToggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteItem(id) {
    setItems((item) => item.filter((item) => item.id !== id));
  }

  function handleAddItem(newItem) {
    setItems((prevItem) => [...prevItem, newItem]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    handleAddItem(newItem);
    setDescription("");
    setQuantity(1);
  }
  const handleDescription = (e) => setDescription(e.target.value);
  const handleQuantity = (e) => setQuantity(Number(e.target.value));

  return (
    <div className="app">
      <Logo />
      <Form
        handleSubmit={handleSubmit}
        handleDescr={handleDescription}
        description={description}
        handleQuantity={handleQuantity}
        quantity={quantity}
      />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        handleToggle={handleToggle}
        onClearList={handleClear}
      />
      <Stats />
    </div>
  );
};

export default TravelList;
