import React from "react";

function MultiCard(props) {
  const question = props.questionData;
  const choices = ["a", "b", "c", "d"];
  const options = question.options.map((option, i) => {
    return (
      <li key={i}>
        {choices[i]}, {option}
      </li>
    );
  });

  const answerIndex = question.options.indexOf(question.answer);
  const answerLetter = choices[answerIndex];
  return (
    <div>
      <div>
        <div className="card-back">
          <div>{question.service}</div>
          <ul className="multi">{options}</ul>
        </div>
        <div className="card-front">
          {answerLetter}. {question.answer}
        </div>
      </div>
    </div>
  );
}

export default MultiCard;
