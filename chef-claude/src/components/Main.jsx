import "./main.css";
import { useState, useRef, useEffect } from "react";
import Recipe from "./Recipe";
import Form from "./Form";
import IngredientList from "./IngredientList";
import { getRecipeFromMistral } from "../ai";

export default function Main() {
  const [ingredients, setIngredients] = useState(["apple", "banana", "sugar"]);
  const [recipe, setRecipe] = useState("");
  const recipeSection = useRef(null);

  // Old way
  // const handleSubmit = (event) => {
  // event.preventDefault();
  // const formData = new FormData(event.currentTarget);
  // const newIngredient = formData.get("ingredient");
  // setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  // event.currentTarget.reset();
  // };

  useEffect(() => {
    if (recipe && recipeSection.current) {
      recipeSection.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [recipe]);

  //In React 19
  const addIngredient = (formData) => {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  };

  const getRecipe = async () => {
    if (ingredients.length > 0) {
      const data = await getRecipeFromMistral(ingredients);
      setRecipe(data);
    }
  };

  return (
    <main>
      {/* <form className="add-ingredient-form" onSubmit={handleSubmit}> */}
      <Form onAddIngredient={addIngredient} />
      {ingredients.length > 0 ? (
        <IngredientList
          ingredients={ingredients}
          getRecipe={getRecipe}
          ref={recipeSection}
        />
      ) : null}
      {recipe.content && <Recipe recipe={recipe} />}
    </main>
  );
}
