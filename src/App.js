import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <Dictionary />
        <footer className="App-footer">
          <p>
            <small>Coded by Anjali Patel and open-sourced on GitHub</small>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
