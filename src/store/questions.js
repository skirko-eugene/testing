export default {
  state: {
    questions: [
      {
        qid: '',
        question: 'Jim ... very short.',
        answers: [
          {answer: 'a', correct: false, userAnswer: false},
          {answer: 'is', correct: true, userAnswer: false},
          {answer: 'has', correct: false, userAnswer: false},
          {answer: 'an', correct: false, userAnswer: true}
        ],
      },
      {
        qid: '',
        question: 'My uncle ... like football very much.',
        answers: [
          {answer: 'doesn\'t', correct: true, userAnswer: true},
          {answer: 'don\'t', correct: false, userAnswer: false},
          {answer: 'hasn\'t', correct: false, userAnswer: false},
          {answer: 'didn\'t', correct: false, userAnswer: false}
        ],
      },
      {
        qid: '',
        question: 'How ... does that iphone cost?',
        answers: [
          {answer: 'is', correct: false, userAnswer: false},
          {answer: 'many', correct: false, userAnswer: true},
          {answer: 'much', correct: true, userAnswer: false},
          {answer: 'are', correct: false, userAnswer: false}
        ],
      },
      {
        qid: '',
        question: 'There ... two big supermarkets behind my house.',
        answers: [
          {answer: 'is', correct: false, userAnswer: false},
          {answer: 'are', correct: true, userAnswer: false},
          {answer: 'have', correct: false, userAnswer: true},
          {answer: 'had', correct: false, userAnswer: false}
        ],
      },
      {
        qid: '',
        question: 'I ... agree with you.',
        answers: [
          {answer: 'am not', correct: false, userAnswer: false},
          {answer: 'does not', correct: false, userAnswer: false},
          {answer: 'do not', correct: true, userAnswer: false},
          {answer: 'has not', correct: false, userAnswer: true}
        ],
      },
      {
        qid: '',
        question: 'Carl cannot ... chess. He\'s broken his right arm.',
        answers: [
          {answer: 'to play', correct: false, userAnswer: false},
          {answer: 'playing', correct: false, userAnswer: false},
          {answer: 'play', correct: true, userAnswer: false},
          {answer: 'plays', correct: false, userAnswer: true}
        ],
      },
      {
        qid: '',
        question: '... some juice?',
        answers: [
          {answer: 'Would you like', correct: true, userAnswer: false},
          {answer: 'You\'d like', correct: false, userAnswer: false},
          {answer: 'Do you like', correct: false, userAnswer: false},
          {answer: 'Would you like', correct: false, userAnswer: true}
        ],
      },
    ],
    answerCounter: null,
    rightAnswerUser: [
      {id: '0', answerUser: 1},
      {id: '1', answerUser: 2},
      {id: '2', answerUser: 3},
      {id: '3', answerUser: 4},
      {id: '4', answerUser: 2},
      {id: '5', answerUser: 3},
      {id: '6', answerUser: 4}
    ],
    rightAnswerCounter: [],
  },
  getters: {
    questions(state) {
      return state.questions;
    },
    getRightAnswerUser(state) {
      return state.rightAnswerUser;
    },

    rightAnswer(state){
      return console.log(state);
    }
  },
  mutations: {},
  actions: {}
}
