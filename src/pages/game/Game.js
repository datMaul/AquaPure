export default function Gmae() {

<link rel="stylesheet" href="game.css"></link>


const questionCard = document.querySelector('.question')
const choices = Array.from(document.querySelectorAll('.answer-button'))
const scoreText = document.querySelector('.score')
const body = document.querySelector('.body')

window.addEventListener('load', gameStart)

var currentQuestion = {}
var score = 0
var questionIndex = 0 
var acceptingAnswer = true
var questionList = []

const POINTS = 100
const MAX_QUESTIONS = 3

var questions = [
    {
        question: 'what is a',
        choice1:  'a',
        choice2:  'b',
        choice3:  'c',
        choice4:  'd',
        answer: 3,
    },
    {
        question: 'what is b',
        choice1:  'a',
        choice2:  'aaaab',
        choice3:  'c',
        choice4:  'd',
        answer: 3,
    },
    {
        question: 'what is c',
        choice1:  'a',
        choice2:  'bddd',
        choice3:  'c',
        choice4:  'd',
        answer: 3,
    }
]

function gameStart(){
    console.log('e')
    score = 0 
    questionIndex = 0
    questionList = [... questions]
    nextQuestion()
}

function nextQuestion(){
    if(questionList.length === 0 || questionIndex > MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('endScreen.html')
    }

    const questionCounter = Math.floor(Math.random() * questionList.length)
    currentQuestion = questionList[questionCounter]
    questionCard.innerText = currentQuestion.question
    choices.forEach(choice =>{
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    questionList.splice(questionCounter, 1)
    acceptingAnswer = true
}

choices.forEach(selection =>{
    selection.addEventListener('click', selectAnswer)
})

function selectAnswer(selection){
    if(!acceptingAnswer) return

    acceptingAnswer = false
    const selectedChoice = selection.target
    const selectedAnswer = selectedChoice.dataset['number']

    var appliedClass = selectedAnswer == currentQuestion.answer ? 'correct' : 'wrong'

    if(appliedClass === 'correct') {
        score += POINTS
        scoreText.innerHTML = "Score <br>" + score;
    }

    selectedChoice.classList.add(appliedClass)
    body.classList.add(appliedClass)
    
    setTimeout(() => {
        selectedChoice.classList.remove(appliedClass)
    body.classList.remove(appliedClass)
        nextQuestion()
    }, 2000)

}

  return (
  <div>
    <div class="green" ></div>
    <div class="red"></div>
    <div class = "card">
        <h1 class = "question">test</h1>
        <div class = "button-group">
            <button class = "answer-button" data-number="1">ans1</button>
            <button class = "answer-button" data-number="2">ans2</button>
            <button class = "answer-button" data-number="3">ans3</button>
            <button class = "answer-button" data-number="4">ans4</button>
        </div>
        <div class="score">Score  0</div>
    </div>
    <script src="webpage.js"></script>
  </div>
  );
}
