import React from "react";
import FontAwesome from "./FontAwesome";

function QuizeType(props) {
  return (
    <li className="col-sm-3 text-center">
      <div
        className="nav-card"
        onClick={() => {
          props.userChoice(props.quizType);
        }}
      >
        <FontAwesome icon={props.icon} size="4x" />
        <span>{props.quizType}</span>
      </div>
    </li>
  );
}

export default QuizeType;
