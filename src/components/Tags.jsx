import React from "react";
import '../style/Tags.css'

function Tag({ nom }) {
  return (
    <div className="tag-container">
      <span className="tag_button">{nom}</span>
    </div>
  );
}

export default Tag;