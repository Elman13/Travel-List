import { useState } from "react";
import Item from "./Item";
import Modal from "./Modal";

export default function PackingList({
  items,
  onDeleteitem,
  onToggleItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  const [isModalVisible, setIsModalVisible] = useState(false);

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  function handleClearList() {
    setIsModalVisible(true);
  }

  function handleConfirmClear() {
    onClearList();
    setIsModalVisible(false);
  }

  function handleCancelClear() {
    setIsModalVisible(false);
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteitem={onDeleteitem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={handleClearList}>Clear</button>
      </div>

      <Modal
        message="Are you sure want to clear all lists?"
        isVisible={isModalVisible}
        onConfirm={handleConfirmClear}
        onCancel={handleCancelClear}
      />
    </div>
  );
}
