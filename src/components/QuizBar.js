import React from "react";
import QuizType from "./QuizTypes";
function QuizBar(props) {
  const quizArray = [
    { icon: "dice", type: "Random" },
    { icon: "file-alt", type: "Regular" },
    { icon: "dumbbell", type: "Weighted" },
    { icon: "font", type: "Multi" },
  ];

  const quizType = quizArray.map((quiz, i) => {
    return (
      <QuizType
        key={i}
        icon={quiz.icon}
        quizType={quiz.type}
        userChoice={props.userChoice}
      />
    );
  });
  return (
    <div className="quiz-bar">
      <ul className="nav nav-pills nav-fill">{quizType}</ul>
    </div>
  );
}

export default QuizBar;
