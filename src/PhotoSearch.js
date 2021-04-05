import React from "react";

import "./PhotoSearch.css";

export default function PhotoSearch(props) {
  if (props.data) {
    return (
      <div className="PhotoSearch container">
        <div className="row">
          {props.data.map(function (photo, index) {
            return (
              <div className="col" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    className="img-fluid"
                    alt="gallery"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
