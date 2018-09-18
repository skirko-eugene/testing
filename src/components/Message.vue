<template name="">
  <div class="alert text-center"
      :class="'alert-'+type">
    <h2>{{ text }}</h2>
    <hr>
    <button class="btn btn-primary"
            @click="$emit('onNext')">Continue</button>
  </div>
</template>
<script>
  export default {
    props: ['type', 'text']
  }
</script>
<style></style>
