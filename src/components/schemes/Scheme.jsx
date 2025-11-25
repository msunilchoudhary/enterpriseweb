import React from "react";

function Scheme({ data }) {
  return (
    <div className="schemebox">
      <div className="scheme-icon transition">
        <img src={data.img} alt={data.title} />
      </div>
      <div className="scheme-info">
        <h4>{data.title}</h4>
        <p>{data.text}</p>
      </div>
    </div>
  );
}

export default Scheme;
