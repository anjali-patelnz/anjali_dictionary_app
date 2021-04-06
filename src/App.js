import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary defaultWord="Dictionary" />
        <footer className="App-footer">
          <div className="container">
            <div className="footnote">
              <p className="text-center">
                This site was coded by{" "}
                <a
                  href="https://focused-johnson-3a2ad6.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Anjali Patel
                </a>{" "}
                and is open-sourced on{" "}
                <a
                  href="https://github.com/anjali-patelnz/anjali_dictionary_app"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </p>
            </div>
            <div className="social-links d-flex justify-content-evenly">
              <a
                href="https://focused-johnson-3a2ad6.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-user-alt"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/anjalipatelnz/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/anjali-patelnz"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github-square"></i>
              </a>
            </div>
            <div className="credits">
              <p>
                Photos provided by{" "}
                <a
                  href="https://www.pexels.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Pexels
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
