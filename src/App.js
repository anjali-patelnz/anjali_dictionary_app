import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <p>Header</p>
        </header>
        <Dictionary />
        <footer className="App-footer">
          <p>Footer</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
