import Markdown from "react-markdown";

export default function Recipe(props) {
  console.log(props);
  return (
    <section className="recipe-detail">
      <Markdown>{props.recipe.content}</Markdown>
    </section>
  );
}
