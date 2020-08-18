<template>
  <div class="layout">
    <Header />
    <slot/>
  
  </div>
</template>

<script>

import { BButton } from 'bootstrap-vue'
import { BNavbar } from 'bootstrap-vue'
import { BNavbarNav } from 'bootstrap-vue'
import { BNavbarBrand } from 'bootstrap-vue'
import { BNavbarToggle } from 'bootstrap-vue'
import Header from '~/components/Header.vue'

export default {
  components: {
    Header,
    BButton,
    BNavbar
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

<style>

</style>
