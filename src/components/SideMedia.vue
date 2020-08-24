<template>
 
</template>
<script>
import { BCard } from 'bootstrap-vue'

import { BCol } from 'bootstrap-vue'
export default {

  components: {
  BCard,
   BCol
  }
}
    

</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>