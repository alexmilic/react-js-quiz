import { useState, useCallback, act } from "react";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";
import QUESTIONS from '../questions.js';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;


  const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswer) => {
      return [...prevUserAnswer, selectedAnswer]
    });
  }, []);

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null)
  }, [handleSelectAnswer]);

  if (quizIsComplete) {
    return (
      <Summary userAnswers={userAnswers} />
    )
  }

  return (
    <Question
      index={activeQuestionIndex}
      key={activeQuestionIndex}
      onSelectAnswer={handleSelectAnswer}
      onSkipAnswer={handleSkipAnswer}
    />
  )
}