<template>
  <div class="jumbotron">
    <h1 class="display-4 mb-4 text-center">Вопрос</h1>
    
    <div class="question mb-5" v-for="(question, index) in questions" :key="index">
      
      <div class="row">
        <div class="col-sm-4">
          <div class="alert alert-primary" role="alert">{{question.qid+'. '}}{{question.question}}</div>
        </div>
      </div>
      
      <div class="row">
        <div class="col-sm-4">
          <div class="list-group">
            <a href="javascript:void(0);" class="list-group-item list-group-item-action" v-for="(answer, index) in question.answers" :key="index" @click="checkAnswer(question.qid, index)">
              <strong>{{index+1}}. </strong>{{answer.answer}}
            </a>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>
<script>
  class Coords {
    constructor(qid, index) {
      this.qid = qid
      this.index = index
    }
  }
  
  export default {
    data() {
      return {
        questionId: '',
        answerIndex: '',
      }
    },
    methods: {
      checkAnswer(qid, index) {
        this.questionId = qid
        this.answerIndex = index
        this.fetchAnswer()
      }
    },
    computed: {
      questions() {
        return this.$store.getters.questions
      },
      fetchAnswer() {
        return this.$store.getters.rightAnswer(this.questionId,this.answerIndex)
      }
    }
  }
</script>
<style scoped>
  .row {
    justify-content: center;
  }
  
  .question {
    text-align: center;
  }
  
  .jumbotron {
    margin-bottom: 0;
  }
  
  .list-group-item {
    text-align: left;
  }
</style>




