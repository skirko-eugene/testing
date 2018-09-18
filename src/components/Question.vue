<template>
  <div class="jumbotron">
    <h1 class="display-4 mb-4 text-center">Вопрос</h1>
    
    <div class="question mb-5" v-for="(question, index) in questions" :key="index">
      
        <div class="row">
          <div class="col-sm-4">
            <div class="alert alert-primary" role="alert">{{question.question}}</div>
          </div>
        </div>
        
        <div class="row">
          <div class="col-sm-4">
            <div class="list-group" >
              <a href="javascript:void(0);" class="list-group-item list-group-item-action"
                v-for="(answer, index) in question.answers" :key="index"
              ><strong>{{index+1}}. </strong>{{answer.answer}}</a>
            </div>
          </div>
        </div>
    
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
      
      }
    },
    computed: {
      questions() {
        return this.$store.getters.questions
      },
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
  .jumbotron{
    margin-bottom: 0;
  }
  .list-group-item{
    text-align: left;
  }
</style>




