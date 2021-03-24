import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <p>Header</p>
        </header>
        <SearchEngine />
        <footer className="App-footer">
          <p>Footer</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
