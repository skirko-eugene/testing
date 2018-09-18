<template>
  <div class="jumbotron">
    
    <div class="container mb-5">
      <div class="row">
        <div class="col-sm-12 justify-content-sm-center">
          <h1 class="display-4 mb-4 text-center">Регистрация</h1>
        </div>
        <div class="col-sm-12">
          <form class="form-inline justify-content-sm-center">
            
            <div class="input-group mb-2 mr-sm-2">
              <div class="input-group-prepend">
                <div class="input-group-text">@</div>
              </div>
              <input type="email" class="form-control" placeholder="john@gmail.com" v-model="emailReg">
            </div>
            
            <input type="password" class="form-control mb-2 mr-sm-2" placeholder="password" v-model="passwordReg">
            <input type="password" class="form-control mb-2 mr-sm-2" placeholder="password" v-model="confirmPassword">
            
            <button type="submit" class="btn btn-primary mb-2" @click.prevent="onRegSubmit">Submit</button>
          </form>
        </div>
      
      </div>
    </div>
    
    <div class="container">
      <div class="row">
        <div class="col-sm-12 justify-content-sm-center">
          <h1 class="display-4 mb-4 text-center">Авторизация</h1>
        </div>
        <div class="col-sm-12">
          <form class="form-inline justify-content-sm-center">
            
            <div class="input-group mb-2 mr-sm-2">
              <div class="input-group-prepend">
                <div class="input-group-text">@</div>
              </div>
              <input type="email" class="form-control" id="inlineFormInputGroupUsername4" placeholder="john@gmail.com" v-model="emailAuth">
            </div>
            
            <input type="password" class="form-control mb-2 mr-sm-2" id="inlineFormInputName4" placeholder="password" v-model="passwordAuth">
            
            <button type="submit" class="btn btn-primary mb-2" @click.prevent="onAuthSubmit">Submit</button>
          </form>
        </div>
      
      </div>
    </div>
  
  </div>
</template>
<script>
  export default {
    data() {
      return {
        emailReg: '',
        passwordReg: '',
        confirmPassword: '',
        
        emailAuth: '',
        passwordAuth: '',
      }
    },
    computed: {
      loading() {
        return this.$store.getters.loading
      }
    },
    methods: {
      onRegSubmit() {
        const userReg = {
          email: this.emailReg,
          password: this.passwordReg
        }
        this.$store.dispatch('regUser', userReg)
          .then(_ => {
            this.$router.push('/question')
          })
          .catch((err) => {
            console.log(err);
          })
      },
      onAuthSubmit() {
        const userAuth = {
          email: this.emailAuth,
          password: this.passwordAuth
        }
        this.$store.dispatch('loginUser', userAuth)
          .then(_ => {
            this.$router.push('/question')
          })
          .catch((err) => {
            console.log(err);
          })
      }
    }
  }
</script>
