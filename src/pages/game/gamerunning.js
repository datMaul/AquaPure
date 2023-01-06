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