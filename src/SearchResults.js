import React from "react";

export default function SearchResults(props) {
  if (props.data) {
    return (
      <div className="SearchResults">
        <h2>{props.data.word}</h2>
      </div>
    );
  } else {
    return <div>Hello from Search Results</div>;
  }
}
