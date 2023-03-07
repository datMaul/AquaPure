import "./game.css";
import React, {useState} from 'react';

export default function Gmae() {
const [currentQuestionIndex, setCurrentQuestion] = useState(0);
const [score, setScore] = useState(0);
const [background, setBackground] = useState('body');
const [cardVisibility, setCardVisibility] = useState('card');
const [endscreenVisibility, setEndscreenVisibility] = useState('invisible');
const [acceptingAnswer, setAcceptingAnswer] = useState(true);

var classOfButton = [
  "answer-button",
  "answer-button",
  "answer-button",
  "answer-button",
]

const [buttonClasses, setButtonClasses] = useState(classOfButton)

const POINTS = 100

var questions = [
  {
      question: 'what is a',
      choices:[
      'aa',
      'b',
      'c',
      'd',
      ],
      answer: 0,
  },
  {
      question: 'what is b',
      choices:[
          'a',
          'bb',
          'c',
          'd',
          ],
      answer: 1,
  },
  {
      question: 'what is c',
      choices:[
          'a',
          'b',
          'cc',
          'd',
          ],
      answer: 2,
  }
]

function newGame(){
  setCurrentQuestion(0)
  setScore(0)
  setCardVisibility('card');
  setEndscreenVisibility('invisible')
  setBackground('body')
  classOfButton = [
    "answer-button",
    "answer-button",
    "answer-button",
    "answer-button",
    ]
  setButtonClasses(classOfButton)
  setAcceptingAnswer(true)
}

const selectedAnswer = (selection) => {
if(!acceptingAnswer) return
  setAcceptingAnswer(false)
if(selection == questions[currentQuestionIndex].answer){
  setScore(score + POINTS)
  setBackground('body correct')
}
else{
  setBackground('body wrong')
}

var answerState = selection == questions[currentQuestionIndex].answer ? 'correct' : 'wrong'
classOfButton[selection] = 'answer-button ' + answerState
setButtonClasses(classOfButton)


if(questions.length == currentQuestionIndex +1){
  localStorage.setItem('mostRecentScore', score)
 
  setTimeout(() => {
    setCardVisibility('invisible')
    setEndscreenVisibility('endscreen')
    setBackground('body')
  }, 2000)
}
else{

  const nextQuestion = currentQuestionIndex + 1

  console.log(score)
  setTimeout(() => {

    setCurrentQuestion(nextQuestion)
    setBackground('body')
    classOfButton = [
    "answer-button",
    "answer-button",
    "answer-button",
    "answer-button",
    ]
    setButtonClasses(classOfButton)
    setAcceptingAnswer(true)

  }, 2000)
}



}

  
  return (
  <div className={background}>
    <div className="green" ></div>
    <div className="red"></div>
    <div className= {cardVisibility}>
        <h1 className= "question">{questions[currentQuestionIndex].question}</h1>
        <div className= "button-group">
            <button className= {buttonClasses[0]} onClick={()=> selectedAnswer(0)}>{questions[currentQuestionIndex].choices[0]}</button>
            <button className= {buttonClasses[1]} onClick={()=> selectedAnswer(1)}>{questions[currentQuestionIndex].choices[1]}</button>
            <button className= {buttonClasses[2]} onClick={()=> selectedAnswer(2)}>{questions[currentQuestionIndex].choices[2]}</button>
            <button className= {buttonClasses[3]} onClick={()=> selectedAnswer(3)}>{questions[currentQuestionIndex].choices[3]}</button>
        </div>
        <div className="score">Score <br></br> {score}</div>
    </div>
    <div className={endscreenVisibility}>
      <h1>Score = {score}</h1>
      <button className="restart-button" onClick={newGame}>Play Again</button>
    </div>
  </div>
  );
  
}
