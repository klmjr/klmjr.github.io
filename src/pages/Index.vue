<template>
  <Layout>
     <div>
  <b-jumbotron bg-variant="secondary" text-variant="dark" border-variant="primary">
    <template v-slot:header>BootstrapVue</template>

    <template v-slot:lead>
      This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
      featured content or information.
    </template>

    <hr class="my-4">

    <p>
      It uses utility classes for typography and spacing to space content out within the larger
      container.
    </p>
  </b-jumbotron>
</div>
    
  </Layout>
</template>

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
