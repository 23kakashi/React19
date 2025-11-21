function App() {
  return (
    <main>
      <img src="/src/assets/react.svg" alt="react logo" width="40px" />
      <h1>Fun facts about React!</h1>
      <ul style={{ listStyleType: "circle" }}>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      <Page />
    </main>
  );
}

export default App;

function Page() {
  return (
    <>
      <header>
        <img src="/src/assets/react.svg" alt="react logo" width="40px" />
      </header>
      <main>
        <h1>This is a list of reasons</h1>
        <ol type="A">
          <li>Reason 1</li>
          <li>Reason 2</li>
          <li>Reason 3</li>
        </ol>
      </main>
      <footer>
        &copy; 2025 Sharma development. ALl right reserved.
      </footer>
    </>
  );
}
