
currentQuestion = 0;
const Questions = [
  {
    question1: 'Text Here',
    answers: ['answer1', 'answer2', 'answer3'],
    correctAnswer: 'answer1',
    imageURL: 'assets/images/nashville.jpg'
  },
  {
    question2: 'question2',
    answers: ['question 2 answer 1', 'question 2 answer 2', 'question 2 answer 3'],
    correctAnswer: 'question 2 answer 2'
  }
]

console.log(Questions[0].imageURL);

if (Questions[currentQuestion].correctAnswer === usesAnswer) {
}