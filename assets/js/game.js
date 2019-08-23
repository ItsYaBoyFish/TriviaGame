// console.log('connected');
// Variables
let gameHolder = $('#game-div');
let answersChosen = [];
let guessesCorrect = 0;
let guessesIncorrect = 0;
let countDownValue = 15;
let time = $('#time');
let clockRunning = false;
let resultDIV = $('#result');
var timer;
// -----------------------------

// console.log(answersChosen);
// console.log(guessesCorrect);


// Data
let Questions = [
  {
    question: 'Question 1: What is the most recognizable Saltwater Aquarium Fish?',
    correctAnswer: 'Clown Fish',
    answers: ['Clown Fish', 'Blue Tang', 'Yellow Tang', 'Lion Fish']
  },
  {
    question: 'Question 2: Is Coral from a Coral Reef a living organism?',
    correctAnswer: 'Yes',
    answers: ['Yes', 'No']
  },
  {
    question: 'Question 3: Where is the Great Barrier Reef Located?',
    correctAnswer: 'Australia',
    answers: ['London', 'Florida Keys', 'Red Sea', 'Australia']
  },
  {
    question: 'Question 4: How much of the ocean has not been explored?',
    correctAnswer: '95%',
    answers: ['92%', '85%', '90%', '95%']
  }
]





function loadTheGame() {
  gameHolder.empty();
  answersChosen = [];
  guessesCorrect = 0;
  time.text(`00:${countDownValue}`)
  // Loading the page with questions and answers
  for (let i = 0; i < Questions.length; i++) {
    let questionElement = $('<p>');
    questionElement.attr('class', 'question')
    questionElement.text(Questions[i].question);
    questionElement.append('<br>');
    gameHolder.append(questionElement);
    for (let j = 0; j < Questions[i].answers.length; j++) {
      // console.log(Questions[i].answers[j]);
      let answerElement = $('<input>');
      let span = $('<span>');
      answerElement.attr('class', 'checkbox')
      answerElement.attr('type', 'checkbox');
      answerElement.attr('value', `${Questions[i].answers[j]}`)
      span.text(`${Questions[i].answers[j]}`);
      gameHolder.append(answerElement);
      gameHolder.append(span);
    }

  }
  // End of loading the page with questions and answers
};

loadTheGame();

$(document).on('click','.checkbox', function() {
  let userInput = $(this).val();
  console.log(userInput);
  answersChosen.push(userInput)
  console.log(answersChosen);
});

// $('.checkbox').on('click', function() {
//   let userInput = $(this).val();
//   console.log(userInput);
//   answersChosen.push(userInput)
//   console.log(answersChosen);
// });

function checkAnswers() {
  resultDIV.empty(); 
  let p = $('<p>');
  let guessesIncorrect = Questions.length - guessesCorrect;
  // Check to see if the user answered all questions. 
  for (let i = 0; i < answersChosen.length; i++) {
    if (answersChosen.includes(Questions[i].correctAnswer)) {
      guessesCorrect = guessesCorrect + 1;
      console.log(guessesCorrect);
      console.log(`Answers Right: ${guessesCorrect}`);
    } else {
      //guessesIncorrect = guessesIncorrect + 1;
      // console.log(`Answers Wrong: ${guessesIncorrect}`);
    }
    guessesIncorrect = Questions.length - guessesCorrect;
  }
  console.log(`Total Answers Right: ${guessesCorrect}`);
  console.log(`Total Answers Wrong: ${guessesIncorrect}`);
  p.text(`Total Answers Right: ${guessesCorrect} & Total Answers Wrong: ${guessesIncorrect}`);
  if (guessesCorrect > guessesIncorrect) {
    p.css('background-color', 'green');
  } else {
    p.css('background-color', 'red');
  }
  p.attr('class', 'space')
  resultDIV.prepend(p);
}

$('#finished-game').on('click', function() {
  checkAnswers();
  clearInterval(timer)
  time.text(`00:${countDownValue}`)
});

function loadTheCounter() {
  var seconds = countDownValue;
  timer = setInterval(function() {
    time.text(`00:${seconds}`);
    seconds--;
    console.log(seconds);
    if (seconds <= 9) {
      time.text(`00:0${seconds}`)
    }
    if (seconds === 0) {
      alert('Time to restart')
      clearInterval(timer)
      time.text(`00:${countDownValue}`)
      checkAnswers();
    } 
  }, 1000);
};


$('#start-game').on('click', function() {
  loadTheGame();
  loadTheCounter();
  resultDIV.empty();
})


