<template>
  
<div>
  <Layout>
<div v-for="edge in $page.allStoryblokEntry.edges" :key="edge.node.id">
  <h1>{{ edge.node.content.title }}</h1>

  <h2>{{ edge.node.content.description }}</h2>

  <h2>{{ edge.node.content.body }} </h2>
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