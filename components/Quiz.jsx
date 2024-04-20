"use client";
import { useEffect, useState } from "react";

function Quiz() {
  const [quiz, setQuiz] = useState(null);
  const [correct, setCorrect] = useState(null);
  const [answers, setAnswers] = useState(null);
  const [chooseCorrect, setChooseCorrect] = useState(null);
  const [clicked, setClicked] = useState(false);

  const checkAnswer = () => {
    const buttonChoice = document.activeElement.value;
    console.log(buttonChoice, correct);
    if (buttonChoice.includes(correct)) {
      console.log("Correct!");
      setChooseCorrect(true);
    } else {
      console.log("Incorrect!");
      setChooseCorrect(false);
    }
    setClicked(true);
  };

  const checkQuotes = ({ question }) => {
    if (question.includes("&quot;")) {
      question = question.replace(/&quot;/g, '"');
    }
    return question;
  };

  const shuffleAnswers = ({ correct_answer, incorrect_answers }) => {
    const shuffledAnswers = [correct_answer, ...(incorrect_answers || [])].sort(
      () => Math.random() - 0.5
    );
    setAnswers(shuffledAnswers);
  };
  const generateQuiz = () => {
    console.log("Generating quiz...");
    fetch("https://opentdb.com/api.php?amount=1")
      .then((response) => response.json())
      .then((data) => {
        const question = data.results[0].question;
        const correctAnswer = data.results[0].correct_answer;
        const incorrectAnswers = data.results[0].incorrect_answers;

        // Set quiz as an object containing question, correct answer, and incorrect answers
        setQuiz(checkQuotes({ question }));

        // Shuffle answers
        shuffleAnswers({
          correct_answer: correctAnswer,
          incorrect_answers: incorrectAnswers,
        });
        setCorrect(correctAnswer);

        console.log(question);
        console.log(data.results);
      })
      .catch((error) => {
        console.error("Error fetching quiz:", error);
      });
    console.log("done!");
  };

  return (
    <section className="flex items-center justify-center flex-col">
      <h1 className="my-10 text-center font-bold text-4xl">
        Click on the button to generate a quiz!
        <hr className="w-6 h-1 mx-auto my-4 bg-blue-500 border-0 rounded"></hr>
      </h1>
      {quiz === null && (
        <button
          onClick={() => generateQuiz()}
          className="text-neutral-100 font-semibold px-6 py-3 bg-blue-400 rounded shadow hover:bg-blue-700"
        >
          Generate
        </button>
      )}

      {quiz && (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
          <p className="text-lg font-bold text-slate-700 text-center	">{quiz}</p>
          <ul className="mt-4">
            {answers.map((answer, index) => (
              <li key={index} className="mb-2">
                <button
                  onClick={() => checkAnswer()}
                  value={answer}
                  className={`w-full px-4 py-2 bg-blue-400 text-white rounded-md shadow-md focus:outline-none ${
                    clicked && answer === correct
                      ? "bg-green-500"
                      : clicked && answer !== correct
                      ? "bg-rose-400"
                      : ""
                  } hover:transition-transform hover:duration-300 hover:ease-in-out hover:scale-105`}
                >
                  {answer}
                </button>
              </li>
            ))}
          </ul>
          {chooseCorrect === true ? (
            <p className="text-green-500 text-xl text-center">Correct!</p>
          ) : (
            chooseCorrect === false && (
              <p className="text-red-500 text-xl text-center">Incorrect!</p>
            )
          )}
        </div>
      )}
    </section>
  );
}

export default Quiz;
