import React from "react";

function RandomWeight(props) {
  const question = props.questionData;
  return (
    <div>
      <div className="card-back">
        <div>{question.service}</div>
        <div className="commonality">{question.common}</div>
      </div>
      <div className="card-front">
        <div>{question.cat}</div>
      </div>
    </div>
  );
}

export default RandomWeight;
