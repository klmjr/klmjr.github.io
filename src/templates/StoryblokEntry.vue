<template>
  
<div>
  <Layout>
<div v-for="edge in $page.allStoryblokEntry.edges" :key="edge.node.id">
  <Richtext :text="edge.node.content.body">
  {{ edge.node.content.body }}

  </Richtext>
  </div>
  </Layout>
</div>
</template>

<page-query>
query {
allStoryblokEntry{
    edges{
      node{
        id
        content
      full_slug
      }
    }
  }
}
</page-query>
<script>
import Richtext from '~/components/Richtext.vue'


export default {
  components: {
   Richtext
  }
}
</script>