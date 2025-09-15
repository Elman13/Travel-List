export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>start adding items to your packing list 🎒</em>
      </footer>
    );
  }
  const itemsLength = items.length;
  const packedNum = items.filter((item) => item.packed).length;
  const percent = Math.round((packedNum / itemsLength) * 100);
  return (
    <footer className="stats">
      <em>
        {percent === 100
          ? "You got everything! Ready to go ✈️"
          : `👜 You have ${itemsLength} items on your list, and you already packed ${packedNum} (${percent}%)`}
      </em>
    </footer>
  );
}
