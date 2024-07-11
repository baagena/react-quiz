import { useQuiz } from "../context/QuizContext";

function Timer() {
  const { secondRemaining } = useQuiz();
  const mins = Math.floor(secondRemaining / 60);
  const secs = secondRemaining % 60;

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins} : {secs < 10 && "0"}
      {secs}
    </div>
  );
}

export default Timer;
