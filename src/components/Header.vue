<template>
<div>
     <b-navbar toggleable="lg" type="secondary" variant="dark">
        
    <b-navbar-brand href="/">

      <img src="./thecodingquest.png" width="100" height="100" class="d-inline-block align-top" alt="">
    
 
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        
        <!--C:\Users\kjmas\Desktop\Dev\my-website\kjs-website\src\assets\images-->

        <b-nav-item-dropdown text="Blogs" right>
          <b-dropdown-item g-link to="/coding/">Coding tutorials</b-dropdown-item>
          <b-dropdown-item g-link to="gaming">Kismet Games</b-dropdown-item>
          <b-dropdown-item href="projects">Projects</b-dropdown-item>
        
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            Order Services
          </template>
          <b-dropdown-item href="#">Websites</b-dropdown-item>
          <b-dropdown-item href="#">ArtWork</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
    
  </b-navbar>
   </div>
</template>

<script>
import { BButton } from 'bootstrap-vue'
import { BNavbar } from 'bootstrap-vue'
import { BNavbarNav } from 'bootstrap-vue'
import { BNavbarBrand } from 'bootstrap-vue'
import { BNavbarToggle } from 'bootstrap-vue'
import { BDropdown } from 'bootstrap-vue'
import { BCollapse } from 'bootstrap-vue'
import { BNav } from 'bootstrap-vue'
import { BNavItem } from 'bootstrap-vue'
import { BNavText } from 'bootstrap-vue'
import { BNavForm } from 'bootstrap-vue'
import { BNavItemDropdown } from 'bootstrap-vue'
import { BDropdownItem } from 'bootstrap-vue'
import { BDropdownItemButton } from 'bootstrap-vue'
import { BDropdownDivider } from 'bootstrap-vue'
import { BDropdownForm } from 'bootstrap-vue'
import { BDropdownText } from 'bootstrap-vue'
import { BDropdownGroup } from 'bootstrap-vue'
import { BDropdownHeader } from 'bootstrap-vue'

export default {
  components: {
    
    BButton,
    BNavbar,
    BNavbarNav,
    BNavbarBrand,
    BNavbarToggle,
    BDropdown,
    BCollapse,
    BNav,
    BNavItem,
    BNavText,
    BNavForm,
    BNavItemDropdown,
    BDropdownItem,
    BDropdownItemButton,
    BDropdownDivider,
    BDropdownForm,
    BDropdownText,
    BDropdownGroup,
    BDropdownHeader
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
