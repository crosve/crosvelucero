"use client";
import { useEffect, useState } from "react";

function Quiz() {
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState(null);

  useEffect(() => {
    if (quiz) {
      const shuffledAnswers = [
        quiz[0].correct_answer,
        ...quiz[0].incorrect_answers,
      ].sort(() => Math.random() - 0.5);
      setAnswers(shuffledAnswers);
    }
  }, [quiz]);

  const generateQuiz = () => {
    fetch("https://opentdb.com/api.php?amount=1")
      .then((response) => response.json())
      .then((data) => setQuiz(data.results));
  };

  return (
    <section className="flex items-center justify-center flex-col">
      <h1 className="my-10 text-center font-bold text-4xl">
        Click on the button to generate a quiz!
        <hr className="w-6 h-1 mx-auto my-4 bg-blue-500 border-0 rounded"></hr>
      </h1>
      <button
        onClick={generateQuiz}
        className="text-neutral-100 font-semibold px-6 py-3 bg-blue-400 rounded shadow hover:bg-blue-700"
      >
        Generate
      </button>
      {quiz && (
        <div>
          <p>{quiz[0].question}</p>
          <ul>
            {answers.map((answer) => (
              <li key={answer}>{answer}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default Quiz;
