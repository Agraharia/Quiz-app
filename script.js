const quizeDB = [
    {
        question: "What does CSS stand for?",
        a: "Creative Style Sheets",
        b: "Cascading Style Sheets",
        c: "Computer Style Sheets",
        d: "Colorful Style Sheets",
        Answer: "b",
        Explanation: "CSS stands for Cascading Style Sheets, a style sheet language used to describe the presentation of a document written in HTML or XML."
    },
    {    
        question: "What is the purpose of CSS?",
        a: "To add interactivity to web pages",
        b: "To structure web pages",
        c: "To add functionality to web pages",
        d: "To style web pages",
        Answer: "d",
        Explanation: "The primary purpose of CSS is to style web pages, by controlling the layout, typography, colors, and other visual aspects."
    },
    {
        question: "Which CSS property is used to change the color of text?",
        a: "text-color",
        b: "color",
        c: "font-color",
        d: "text-style",
        Answer: "b",
        Explanation: "The color property is used to set the color of text."
    },
    {
        question: "Which CSS property is used to center an element horizontally?",
        a: "align-center",
        b: "text-center",
        c: "margin-auto",
        d: "justify-center",
        Answer: "c",
        Explanation: "The margin property with a value of auto is commonly used to center an element horizontally."
    },
    {
        question: "Which CSS property is used to change the font size of text?",
        a: "font-size",
        b: "text-size",
        c: "size",
        d: "font-style",
        Answer: "a",
        Explanation: "The font-size property is used to set the size of the font."
    },
    {
        question: "Which CSS property is used to add space between the border and the content of an element?",
        a: "margin",
        b: "padding",
        c: "border-spacing",
        d: "border-padding",
        Answer: "b",
        Explanation: "The padding property is used to add space between the border and the content of an element."
    },
    {
        question: "Which CSS property is used to make text bold?",
        a: "font-style",
        b: "font-weight",
        c: "text-weight",
        d: "text-bold",
        Answer: "b",
        Explanation: "The font-weight property is used to make text bold."
    },
    {
        question: "Which CSS property is used to add a background color to an element?",
        a: "background-color",
        b: "color",
        c: "background",
        d: "bg-color",
        Answer: "a",
        Explanation: "The background-color property is used to set the background color of an element."
    },
    {
        question: "Which CSS property is used to underline text?",
        a: "text-decoration",
        b: "text-style",
        c: "text-underline",
        d: "decoration-style",
        Answer: "a",
        Explanation: "The text-decoration property is used to add or remove text decoration, including underlining."
    },
        
    {
        question: "Which CSS property is used to change the font family of text?",
        a: "font",
        b: "font-style",
        c: "font-family",
        d: "text-font",
        Answer: "c",
        Explanation: "The font-family property is used to set the font family for an element."
    },
    {   
        question: "Which CSS property is used to make an element float?",
        a: "clear",
        b: "position",
        c: "float",
        d: "display",
        Answer: "c",
        Explanation: "The float property is used to make an element float, allowing other elements to flow around it."
    }
];

// code for loading data 
//start
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer'); 

const showscore = document.querySelector('#showscore')

let questionCount = 0;
let score = 0;

// function for load the question
const loadQuestion = () => {

    const questionList = quizeDB[questionCount];
    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

//end

// code for getting information which option is select


// function for check the radio input is check or not
const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
};

// function for deselect the radio input
const deselectAll = () => {
     answers.forEach((curAnsElem) => curAnsElem.checked = false );
}

// function for count the score and load new question 
submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer == quizeDB[questionCount].Answer){
        score++ ;
    };

    questionCount++;

    deselectAll();

    if(questionCount < quizeDB.length){
        loadQuestion();
    }else{
        showscore.innerHTML = `
            <h3> You scored  ${score}/${quizeDB.length} 👀 </h2>
            <button class="btn" onclick="location.reload()">Play Again<button>
        `;

        showscore.classList.remove('scorearea');
    }
})