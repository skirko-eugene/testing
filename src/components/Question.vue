<template>
  <div class="jumbotron">
    <h1 class="display-4 mb-4 text-center">Вопрос</h1>
    
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li
          v-for="(question, index) in questions"
          :key="index"
          :class="['page-item', {
          'active': (index === questionIndex),
          /*'page-item--success': (questions.indexOf(question.answers.userAnswer === true))*/
          }]"
          ref="pageItem"
          ><a class="page-link" href="javascript:void(0);">{{index+1}}
        </a></li>
      </ul>
    </nav>
    
    <div class="question mb-5">
      
      <div class="row">
        <div class="col-sm-4">
          <div class="alert alert-primary" role="alert" >
            {{questionIndex+1+'. '}}{{questions[questionIndex].question}}
          </div>
        </div>
      </div>
      
      <div class="row">
        <div class="col-sm-4">
          <div class="list-group">
            <a href="javascript:void(0);" class="list-group-item list-group-item-action"
              v-for="(answer, index) in questions[questionIndex].answers"
              :key="index"
              @click="checkAnswer(questionIndex, index)">
              <strong>{{index+1}}. </strong>{{answer.answer}}
            </a>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        questionIndex: 0,
        testResult: [
          {
            subject: ''
          }
        ]
      }
    },
    methods: {
      checkAnswer(qid, index) {
        if (qid === this.questions.length - 1) return;
        this.questionIndex++;
        
        if (this.questions[qid].answers[index].correct){
          setTimeout(_=>{
            document.querySelectorAll('.page-item')[qid].classList.add('page-item--success')
          }, 50)
        }else{
          setTimeout(_=>{
            this.wrongClasses(qid)
          }, 50)
        }
      },
      rightClasses(qid){
        this.$refs.pageItem[qid].classList.add('page-item--success')
      },
      wrongClasses(qid){
        this.$refs.pageItem[qid].classList.add('page-item--error')
      },
      
    },
    computed: {
      questions() {
        return this.$store.getters.questions
      },
      getRightAnswerUser() {
        return this.$store.getters.getRightAnswerUser
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
  .page-item--success .page-link{
    transition: color .3s ease, background-color .3s ease, border-color .3s ease;
  }
  .page-item--success .page-link{
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
  }
  .page-item--error .page-link{
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
  }
</style>




