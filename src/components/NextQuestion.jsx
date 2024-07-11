import { useQuiz } from "../context/QuizContext";

function NextQuestion() {
  const { nextQuestion, finished, answer, numQuestions, index } = useQuiz();
  if (answer === null) return null;
  if (index < numQuestions - 1)
    return (
      <button className="btn btn-ui" onClick={nextQuestion}>
        Next
      </button>
    );
  if (index === numQuestions - 1)
    return (
      <button className="btn btn-ui" onClick={finished}>
        Finish
      </button>
    );
}

export default NextQuestion;
