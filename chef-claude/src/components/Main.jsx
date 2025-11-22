import "./main.css";
import { useState } from "react";
import Recipe from "./Recipe";
import Form from "./Form";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipeShown, setRecipeShown] = useState(false);

  // Old way
  // const handleSubmit = (event) => {
  // event.preventDefault();
  // const formData = new FormData(event.currentTarget);
  // const newIngredient = formData.get("ingredient");
  // setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  // event.currentTarget.reset();
  // };

  //In React 19
  const addIngredient = (formData) => {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  };

  const getRecipe = () => {
    setRecipeShown((prev) => !prev);
  };

  return (
    <main>
      {/* <form className="add-ingredient-form" onSubmit={handleSubmit}> */}
      <Form onAddIngredient={addIngredient} />
      {ingredients.length > 0 ? (
        <section>
          <h2>Ingredient on hand:</h2>

          <ul className="ingredient-list-item">
            {ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>

          <div className="call-to-action">
            <div>
              <h3>Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <div className="recipe-button">
              <button onClick={getRecipe}>Get a recipe</button>
            </div>
          </div>
        </section>
      ) : null}
      {recipeShown && (
        <section>
          <Recipe />
        </section>
      )}
    </main>
  );
}
