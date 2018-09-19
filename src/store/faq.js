export default {
  state: {
    questions: [
      {
        question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit1',
        answer: '1Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        usefully: [
          {
            formName: 'form 1',
            userName: '',
            userPhone: '',
          }
        ]
      },
      {
        question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit2',
        answer: '2Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        usefully: [
          {
            formName: 'form 2',
            userName: '',
            userPhone: '',
          }
        ]
      },
      {
        question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit3',
        answer: '3Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        usefully: [
          {
            formName: 'form 3',
            userName: '',
            userPhone: '',
          }
        ]
      },
    ]
  },
  getters: {
    questions(state) {
      return state.questions;
    },
    formName(state){
      return console.log('ХЗ');
    }
  },
  mutations: {},
  actions: {
    getRightAnswer({commit}, payload){
    
    }
  }
}

















