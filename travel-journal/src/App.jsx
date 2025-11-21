import Header from "./components/Header";
import Journal from "./components/Journal";
import data from "./data";

function App() {
  console.log(data);
  return (
    <main>
      <Header />
      {data.map((entry) => (
        <Journal key={entry.id} {...entry} />
      ))}
    </main>
  );
}

export default App;
