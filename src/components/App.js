import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  const [items, setitems] = useState([]);

  function handleAdditems(item) {
    setitems((i) => [...i, item]);
  }

  function handleDeleteItems(id) {
    setitems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItems(id) {
    setitems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    setitems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form handleAdditems={handleAdditems} />
      <PackingList
        items={items}
        onDeleteitem={handleDeleteItems}
        onToggleItem={handleToggleItems}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
