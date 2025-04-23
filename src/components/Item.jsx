import React from "react";

export default function Item({ item, onDeleteItem, handleToggle }) {
  return (
    <li>
      <input type="checkbox" onChange={() => handleToggle(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description} {item.quantity}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
