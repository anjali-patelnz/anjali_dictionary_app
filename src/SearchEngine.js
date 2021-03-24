import React, { useState } from "react";

export default function SearchEngine() {
  const [word, setWord] = useState(" ");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${word}`);
  }

  function handleWordSearch(event) {
    setWord(event.target.value);
  }

  return (
    <div className="SearchEngine">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="enter any word"
          onChange={handleWordSearch}
        ></input>
      </form>
    </div>
  );
}
