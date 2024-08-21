import quizCompleteImage from '../assets/quiz-complete.png';
import QUESTIONS from '../questions.js';

export default function Summary({userAnswers}) {
  
  const skippedAnswers = userAnswers.filter(answer => answer === null);
  const correctAnswers = userAnswers.filter((answer, index) => QUESTIONS[index].answers[0] === answer);

  const skippedAnswersShare = Math.round((skippedAnswers.length / userAnswers.length) * 100);
  const correctdAnswersShare = Math.round((correctAnswers.length / userAnswers.length) * 100);

  const wrongAnswersShare = 100 - skippedAnswersShare - correctdAnswersShare

  return (
    <div id="summary">
    <h2>Quiz Completed!</h2>
    <img src={quizCompleteImage} alt="Trophy icon" />
    <div id="summary-stats">
      <p>
        <span className='number'>{skippedAnswersShare}%</span>
        <span className='text'>skipped</span>
      </p>
      <p>
        <span className='number'>{correctdAnswersShare}%</span>
        <span className='text'>answered correctly</span>
      </p>
      <p>
        <span className='number'>{wrongAnswersShare}%</span>
        <span className='text'>answered incorrectly</span>
      </p>
    </div>
    <ol>
      {
        userAnswers.map((answer, index) => {
          let cssClass = 'user-answer';
          if(answer === null) {
            cssClass += ' skipped'
          } else if(answer === QUESTIONS[index].answers[0]) {
            cssClass += ' correct'
          } else {
            cssClass += ' wrong'
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className='question'>{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? 'Skipped'}</p>
            </li>
          )
        })
      }
    </ol>
  </div>
  )
}