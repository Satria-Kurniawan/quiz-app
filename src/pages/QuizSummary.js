import React from "react";
import { useLocation } from "react-router-dom";

const QuizSummary = () => {
  const location = useLocation();
  const { data } = location.state;
  const grade = data.score.correct * 20;
  let passingGrade = grade;

  if (grade < 8) {
    passingGrade = (
      <div class="alert alert-danger" role="alert">
        <h3>Gk lulus lu goblok!</h3>
      </div>
    );
  } else {
    passingGrade = (
      <div class="alert alert-success" role="alert">
        <h3>Selamat lu lulus!</h3>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="mt-3">
        <h2 className="text-center mb-3 border-bottom pb-3">Quiz Summary</h2>
        <div className="d-flex">
          <h3 className="ms-auto me-3 text-danger">
            Incorrect : {data.score.false}
          </h3>
          <h3 className="text-success me-3">Correct : {data.score.correct}</h3>
          <h3 className="text-dark">Grade : {grade}</h3>
        </div>
        {passingGrade}
        {data.quiz.map((item, index) => (
          <div className="card mb-3" key={index}>
            <div className="card-header">
              {index + 1}. {item.question}
            </div>
            <div className="card-body">
              {item.options.map((item, index) => (
                <div
                  style={{
                    display: "flex",
                    justifyItems: "center",
                    alignItems: "center",
                  }}
                  key={index}
                >
                  <div
                    style={{
                      height: 20,
                      width: 20,
                      borderRadius: 100,
                      backgroundColor: item?.selected ? "black" : "gray",
                      cursor: "pointer",
                      marginRight: 5,
                    }}
                  />
                  {item.answer}
                </div>
              ))}
            </div>
            <div className="card-footer">
              {item.options.find(
                (option) => option.correct && option.selected === option.correct
              ) ? (
                <div className="text-success">
                  Your answer {item.options.find((item) => item.correct).answer}{" "}
                  is correct.
                </div>
              ) : (
                <>
                  <div className="text-danger">
                    {item.options.find((item) => item.selected)?.answer ??
                      "You're not answering this question"}
                  </div>
                  <div className="text-success">
                    The correct answer is{" "}
                    {item.options.find((item) => item.correct).answer}
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizSummary;
