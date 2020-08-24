<template>
  <div class="layout">
    <Header />
    <SideMedia />
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
import SideMedia from '~/components/SideMedia.vue'

export default {
  components: {
    Header,
    BButton,
    BNavbar,
    SideMedia
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
