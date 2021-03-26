import React from "react";

export default function Synonyms(props) {
  if (props.data) {
    return (
      <div>
        <p>
          <small>{props.data}</small>
        </p>
      </div>
    );
  } else {
    return null;
  }
}
