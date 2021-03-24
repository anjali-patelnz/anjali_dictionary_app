import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  const [word, setWord] = useState(" ");

  function handleApiCall(response) {
    console.log(response.data);
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
        placeholder="enter any word"
        onChange={handleWordSearch}
      ></input>
    </form>
  );

  return (
    <div className="Dictionary">
      <div className="SearchEngine">{SearchEngine}</div>
    </div>
  );
}
