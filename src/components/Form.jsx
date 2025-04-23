export default function Form({
  handleSubmit,
  description,
  handleDescr,
  handleQuantity,
  quantity,
}) {
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What you need for your trip?</h3>
      <select onChange={handleQuantity} value={quantity}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="num.."
        value={description}
        onChange={handleDescr}
      />
      <button>Add</button>
    </form>
  );
}
