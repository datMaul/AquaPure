import "./game.css";
import React, {useState} from 'react';

export default function Gmae() {
const [currentQuestionIndex, setCurrentQuestion] = useState(0);
const [score, setScore] = useState(0);
const [background, setBackground] = useState('body');

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

const selectedAnswer = (selection) => {
if(selection == questions[currentQuestionIndex].answer){
  setScore(score + POINTS)
  setBackground('body correct')
}
else{
  setBackground('body wrong')
}

var appliedClass = selectedAnswer == currentQuestionIndex.answer ? 'correct' : 'wrong'


const nextQuestion = currentQuestionIndex + 1
setCurrentQuestion(nextQuestion)
console.log(score)

}

  
  return (
  <div className={background}>
    <div className="green" ></div>
    <div className="red"></div>
    <div className= "card">
        <h1 className= "question">{questions[currentQuestionIndex].question}</h1>
        <div className= "button-group">
            <button className= "answer-button" onClick={()=> selectedAnswer(0)}>{questions[currentQuestionIndex].choices[0]}</button>
            <button className= "answer-button" onClick={()=> selectedAnswer(1)}>{questions[currentQuestionIndex].choices[1]}</button>
            <button className= "answer-button" onClick={()=> selectedAnswer(2)}>{questions[currentQuestionIndex].choices[2]}</button>
            <button className= "answer-button" onClick={()=> selectedAnswer(3)}>{questions[currentQuestionIndex].choices[3]}</button>
        </div>
        <div className="score">Score <br></br> {score}</div>
    </div>
    <script src="gamerunning.js"></script>
  </div>
  );
  
}
