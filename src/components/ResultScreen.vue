<template>
  <div class="alert alert-primary">
    <h3>Success:{{stats.success}}</h3>
    <h3>Error:{{stats.error}}</h3>
    <hr>
    <button class="btn btn-primary" @click="$emit('repeat')">Repeat</button>
    <button class="btn btn-primary" @click="$emit('nextLevel')" v-show="level + 1 < questMax">Next Level</button>
    <button class="btn btn-primary" @click="$emit('startAgain')" v-if="level + 1 === questMax">Start again</button>
  </div>
</template>
<script>
  export default {
    props:['stats','questMax','level']
  }
</script>
<style></style>
