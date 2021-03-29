import React, { useState } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";

import "./Dictionary.css";

export default function Dictionary() {
  const [word, setWord] = useState(" ");
  let [searchResults, setSearchResults] = useState(null);

  function handleApiCall(response) {
    setSearchResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${word}`;
    axios.get(apiUrl).then(handleApiCall);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleWordSearch(event) {
    setWord(event.target.value);
  }

  let SearchEngine = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search for a word"
        onChange={handleWordSearch}
      ></input>
    </form>
  );

  return (
    <div className="Dictionary">
      <section className="hero d-flex align-items-center justify-content-center">
        <div className="container">
          <h1>What do you mean?</h1>
          <h2>Enter your dictionary search term:</h2>
          <div className="SearchEngine">{SearchEngine}</div>
        </div>
      </section>
      <SearchResults data={searchResults} />
    </div>
  );
}
