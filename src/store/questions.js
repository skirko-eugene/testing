export default {
  state: {
    questions: [
      {
        qid: '1',
        question: 'Jim ... very short.',
        answers: [
          {answer: 'a', correct: false},
          {answer: 'is', correct: true},
          {answer: 'has', correct: false},
          {answer: 'an', correct: false}
        ],
      },
      {
        qid: '2',
        question: 'My uncle ... like football very much.',
        answers: [
          {answer: 'doesn\'t', correct: true},
          {answer: 'don\'t', correct: false},
          {answer: 'hasn\'t', correct: false},
          {answer: 'didn\'t', correct: false}
        ],
      },
      {
        qid: '3',
        question: 'How ... does that iphone cost?',
        answers: [
          {answer: 'is', correct: false},
          {answer: 'many', correct: false},
          {answer: 'much', correct: true},
          {answer: 'are', correct: false}
        ],
      },
      {
        qid: '4',
        question: 'There ... two big supermarkets behind my house.',
        answers: [
          {answer: 'is', correct: false},
          {answer: 'are', correct: true},
          {answer: 'have', correct: false},
          {answer: 'had', correct: false}
        ],
      },
      {
        qid: '5',
        question: 'I ... agree with you.',
        answers: [
          {answer: 'am not', correct: false},
          {answer: 'does not', correct: false},
          {answer: 'do not', correct: true},
          {answer: 'has not', correct: false}
        ],
      },
      {
        qid: '6',
        question: 'Carl cannot ... chess. He\'s broken his right arm.',
        answers: [
          {answer: 'to play', correct: false},
          {answer: 'playing', correct: false},
          {answer: 'play', correct: true},
          {answer: 'plays', correct: false}
        ],
      },
      {
        qid: '7',
        question: '... some juice?',
        answers: [
          {answer: 'Would you like', correct: true},
          {answer: 'You\'d like', correct: false},
          {answer: 'Do you like', correct: false},
          {answer: 'Would you like', correct: false}
        ],
      },
    ]
  },
  getters: {
    questions(state) {
      return state.questions;
    }
  },
  mutations: {},
  actions: {}
}

















