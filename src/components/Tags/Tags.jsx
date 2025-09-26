import React from "react";
import "./tags.css";

function Tags({ tags }) {
  return (
    <div className="apartment__tags">
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  );
}

export default Tags;
