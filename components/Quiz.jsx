"use client";
import { useEffect, useState } from "react";

const categories = [
  { id: 9, name: "General Knowledge" },
  { id: 10, name: "Entertainment: Books" },
  { id: 11, name: "Entertainment: Film" },
  { id: 12, name: "Entertainment: Music" },
  { id: 13, name: "Entertainment: Musicals & Theatres" },
  { id: 14, name: "Entertainment: Television" },
  { id: 15, name: "Entertainment: Video Games" },
  { id: 16, name: "Entertainment: Board Games" },
  { id: 17, name: "Science & Nature" },
  { id: 18, name: "Science: Computers" },
  { id: 19, name: "Science: Mathematics" },
  { id: 20, name: "Mythology" },
  { id: 21, name: "Sports" },
  { id: 22, name: "Geography" },
  { id: 23, name: "History" },
  { id: 24, name: "Politics" },
  { id: 25, name: "Art" },
  { id: 26, name: "Celebrities" },
  { id: 27, name: "Animals" },
  { id: 28, name: "Vehicles" },
  { id: 29, name: "Entertainment: Comics" },
  { id: 30, name: "Science: Gadgets" },
  { id: 31, name: "Entertainment: Japanese Anime & Manga" },
  { id: 32, name: "Entertainment: Cartoon & Animations" },
];

function Quiz() {
  const [quiz, setQuiz] = useState(null);
  const [correct, setCorrect] = useState(null);
  const [answers, setAnswers] = useState(null);
  const [chooseCorrect, setChooseCorrect] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [categoryOption, setCategoryOption] = useState({
    category: null,
    difficulty: null,
    type: null,
  });

  const [error, setError] = useState(null);

  const handleUpdate = (e) => {
    setCategoryOption({
      ...categoryOption,
      [e.target.id]: e.target.value,
    });
    console.log(categoryOption);
  };

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
  const generateQuiz = (e) => {
    e.preventDefault();
    console.log("Generating quiz...");
    const { category, difficulty, type } = categoryOption;
    fetch(
      `https://opentdb.com/api.php?amount=1&difficulty=${difficulty}&type=${type}&category=${category}`
    )
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
        setError("Error fetching your quiz. Please try again later.");
      });
    console.log("done!");
  };

  return (
    <section className="flex items-center justify-center flex-col">
      {/* {quiz === null && (
        <>
          <h1 className="my-10 text-center font-bold text-4xl">
            Click on the button to generate a quiz!
            <hr className="w-6 h-1 mx-auto my-4 bg-blue-500 border-0 rounded"></hr>
          </h1>
          <form
            onSubmit={(e) => generateQuiz(e)}
            className="flex items-center justify-center flex-col w-full"
          >
            <label className="text-lg font-semibold text-slate-200">
              Category:
            </label>
            <select
              onChange={handleUpdate}
              id="category"
              className="w-10/12 mb-4"
            >
              <option value="Default">Select Category..</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>

            <label className="text-lg font-semibold text-slate-200">
              Difficulty:
            </label>
            <select
              onChange={handleUpdate}
              id="difficulty"
              className="w-10/12 mb-4"
            >
              <option value="Default">Select Difficulty..</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>

            <label className="text-lg font-semibold text-slate-200">
              Type:
            </label>
            <select onChange={handleUpdate} id="type" className="w-10/12 mb-4">
              <option value="Default">Select Type..</option>
              <option value="multiple">Multiple Choice</option>
              <option value="boolean">True / False</option>
            </select>

            <button
              type="submit"
              className="text-neutral-100 font-semibold px-6 py-3 bg-blue-400 rounded shadow hover:bg-blue-700"
            >
              Generate
            </button>
          </form>
        </>
      )} */}

      {error && (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
          <p className="text-lg font-bold text-slate-700 text-center	">
            {error}
          </p>
        </div>
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
