export default function IngredientList(props) {  
  return (
    <section>
      <h2>Ingredient on hand:</h2>

      <ul className="ingredient-list-item">
        {props.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>

      <div className="call-to-action">
        <div>
          <h3>Ready for a recipe?</h3>
          <p>Generate a recipe from your list of ingredients.</p>
        </div>
        <div className="recipe-button">
          <button onClick={props.getRecipe}>Get a recipe</button>
        </div>
      </div>
    </section>
  );
}
