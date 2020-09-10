const quizData = [
    {
        question: 'When was the pendemy of corona virus started?',
        a: '2002',
        b: '2018',
        c: '2019',
        d: '2020',
        correct: 'c'
    },
    {
        question: 'What is the most used programming language in 2019?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd'
    },
    {
        question: 'Who is the actual President of the USA?',
        a: 'Alexis Ange Dauli',
        b: 'Barack Obama',
        c: 'Donald Trump',
        d: 'Donido Trump',
        correct: 'c'
    },
    {
        question: 'What does HTML stand for?',
        a: 'Hypersonic Technic of Multy Language',
        b: 'Hypertext Markup Language',
        c: 'Hypertext Transport Markup Language',
        d: 'Cascading Stylesheet',
        correct: 'b'
    },
    {
        question: 'What year was JavaScript launched?',
        a: '1994',
        b: '1996',
        c: '1998',
        d: 'None of the above',
        correct: 'b'
    },
]

// select DOM elements
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const a_text =  document.getElementById('a_text');
const b_text =  document.getElementById('b_text');
const c_text =  document.getElementById('c_text');
const d_text =  document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const answerEls = document.querySelectorAll('.answer');

let currentQuiz = 0;
let score = 0;

loadQuiz();

// function that load quiz one after another
function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

// select the answers
function getselected() {
    let answer = undefined;
    
    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

// deselect answer after submition
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answerEl.checked = false;
        }
    });
}

// submit button eventlistener
submitBtn.addEventListener( "click", () => {
    // check to see the answer
    const answer = getselected();

    if(answer) {
        if(answer == quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>
                    You have answered correctly at ${score}/${quizData.length} questions.
                </h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
})
