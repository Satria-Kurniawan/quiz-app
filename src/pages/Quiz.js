import React, { useState, useEffect } from "react";
import { useTimer } from "react-timer-hook";
import { Link } from "react-router-dom";

import { quiz as quizData } from "../components/quiz/fakeData";

const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quiz, setQuiz] = useState(quizData);
  const [score, setScore] = useState({
    correct: 0,
    false: 0,
  });

  const { id, question, options } = quiz[currentIndex];

  const nextQuestion = () => {
    if (quiz.length - 1 === currentIndex) return;
    setCurrentIndex(currentIndex + 1);
  };
  const prevQuestion = () => {
    if (currentIndex === 0) return;
    setCurrentIndex(currentIndex - 1);
  };

  const selectOption = (indexSelected, indexOptionSelected) => {
    setQuiz(
      quiz.map((item, index) =>
        index === indexSelected
          ? {
              ...item,
              selected: true,
              options: options.map((item, index) =>
                index === indexOptionSelected
                  ? { ...item, selected: true }
                  : { ...item, selected: false }
              ),
            }
          : item
      )
    );
  };

  const time = new Date();
  time.setSeconds(time.getSeconds() + 10 * 60); //10 menit

  const { seconds, minutes, hours } = useTimer({
    expiryTimestamp: time,
    onExpire: () => setCurrentIndex(quiz.length - 1),
  });

  const checkScore = () => {
    const questionAnswered = quiz.filter((item) => item.selected);
    const questionCorrect = questionAnswered.filter((item) =>
      item.options.find(
        (option) => option.correct && option.selected === option.correct
      )
    );
    setScore({
      correct: questionCorrect.length,
      false: quiz.length - questionCorrect.length,
    });
  };

  useEffect(() => {
    checkScore();
  }, [quiz]);

  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center border-bottom pb-3 mt-3 mb-3">
          QuiEZ - Ilmu Pengetahuan Umum
        </h2>
        <h2 className="text-start mb-3">
          Time left : {hours}:{minutes}:{seconds}
        </h2>
        {/* <h2 className="text-end">
          Score: {score.correct} / {score.false}
        </h2> */}
        <div className="col-sm-9">
          <div className="card">
            <div className="card-header">
              <h5>
                {currentIndex + 1}. {question}
              </h5>
            </div>
            <div className="card-body">
              {options.map((item, index) => (
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
                      backgroundColor: item?.selected
                        ? "black"
                        : "rgb(211,211,211)",
                      cursor: "pointer",
                      marginRight: 10,
                    }}
                    onClick={() => selectOption(currentIndex, index)}
                  />
                  {item.answer}
                </div>
              ))}
            </div>
          </div>
          <div className="d-flex justify-content-between mt-2">
            <button
              className="btn btn-primary col-sm-2"
              onClick={() => prevQuestion()}
              disabled={currentIndex === 0 ? true : false}
            >
              Previous
            </button>

            {quiz.length - 1 === currentIndex ? (
              <Link
                className="btn btn-success col-sm-2"
                to={"/summary"}
                state={{
                  data: {
                    quiz,
                    score,
                  },
                }}
              >
                Finish
              </Link>
            ) : (
              <button
                className="btn btn-primary col-sm-2"
                onClick={() => nextQuestion()}
              >
                Next
              </button>
            )}
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card">
            <div className="card-body d-flex flex-wrap">
              {quiz.map((item, index) => (
                <div
                  key={index}
                  className="border border-primary mt-2 mb-2 ms-2 me-2"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 40,
                    width: 40,
                    borderRadius: 5,
                    backgroundColor:
                      index === currentIndex
                        ? "blue"
                        : item?.selected
                        ? "greenyellow"
                        : "transparent",
                    color: index === currentIndex ? "white" : "black",
                    cursor: "pointer",
                  }}
                  onClick={() => setCurrentIndex(index)}
                >
                  {index + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
