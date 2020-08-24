<template>
  <Layout>
     <div>
  <h1>What I aim to do:</h1>
  <h3>My goal is to spread knowledge of coding fundementals and help educate those 
    who want to learn how to code!</h3>
</div>


    
  </Layout>
</template>
<page-query>
 
</page-query>
<script>
import { BButton } from 'bootstrap-vue'
import { BJumbotron } from 'bootstrap-vue'

export default {
  components: {
    
    BButton,
    BJumbotron

  }
}
</script>

<style lang="scss">
.home-links  { a{
  margin-right: 1rem;
  color: white;
}
}
</style>
