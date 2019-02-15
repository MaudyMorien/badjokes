//makes jokes

const jokes = [ {
        question: 'How did the frog die?',
        answer: "He 'Kermit' suicide",
    },
    {
        question: 'Why did Mozart kill all his chickens?',
        answer: 'Because when he asked them who the best composer was, they would say was "Bach bach bach!"',
    },
    {
        question: 'Why are ghosts banned from the liquor store?',
        answer: 'Because they would steal all the boos!',
    },
    {
        question: 'What did the left butt cheek say to the right butt cheek?',
        answer: 'You crack me up!',
    },
    {
        question: 'How did the frog die?',
        answer: "He 'Kermit' suicide",
    },
    {
        question: 'Why did Mozart kill all his chickens?',
        answer: 'Because when he asked them who the best composer was, they would say was "Bach bach bach!"',
    },
    {
        question: 'Why are ghosts banned from the liquor store?',
        answer: 'Because they would steal all the boos!',
    },
    {
        question: 'What did the left butt cheek say to the right butt cheek?',
        answer: 'You crack me up!',
    },
    {
        question: 'What is green and sits crying in the corner?',
        answer: 'The incredible Sulk!',
    },
    {
        question: 'Andy has 150 candy bars. He eats 125. What does Andy have now?',
        answer: 'Andy has diabetes now.',
    }
]
//call the btn
// const button = document.getElementById('btn')
// function actionButton() {
//     console.log('Hello')
// }
// actionButton()
// const punchLine = Object.keys(jokes).map(function(key) {
//     return [String(key), jokes[key]];
// })
// console.log(punchLine)

const button = document.getElementById('btn')
let currentJokeNumber = 0


function displayQuestion(){
    const card = document.getElementById('display')
    card.innerHTML = jokes[currentJokeNumber].question
}

function displayAnswer() {    
    const card = document.getElementById('display')
    card.innerHTML = jokes[currentJokeNumber].answer
}  

function nextJoke(){
    currentJokeNumber = currentJokeNumber + 1
    displayQuestion()
    
}



