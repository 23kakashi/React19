export default function Form(props) {
  return (
    <form className="add-ingredient-form" action={props.onAddIngredient}>
      <input
        type="text"
        name="ingredient"
        placeholder="e.g. oregano"
        aria-label="add ingredient"
        required
        minLength={3}
      />
      <button>Add ingredient</button>
    </form>
  );
}
