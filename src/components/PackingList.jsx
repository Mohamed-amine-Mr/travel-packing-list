import { useState } from "react";
export default function PackingList({
  items,
  onDeleteItem,
  handleToggle,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortByItems;

  if (sortBy === "input") sortByItems = items;
  // use slice to take a copy of the array very important , because sort method , is mutating method
  if (sortBy === "description")
    sortByItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortByItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortByItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            handleToggle={handleToggle}
          />
        ))}
      </ul>
      <div className="actions">
        {/* we  make it controlled elements */}
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">sort by the input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}
