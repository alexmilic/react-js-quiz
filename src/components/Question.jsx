import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";


export default function Question({questionText, answers, onSelectAnswer, selectedAnswer, answerState, onSkipAnswer}) {
  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer 
          timeout={10000} o
          nTimeout={onSkipAnswer} 
        />
        <h2>{questionText}</h2>
        <Answers
          answers={answers}
          selectedAnswer={selectedAnswer}
          answeState={answerState}
          onSelect={onSelectAnswer}

        />
      </div>
    </div>
  )
}