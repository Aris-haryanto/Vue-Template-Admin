<template>
  <div :class="[toggleClass]">
    <div class="container body">
      <div class="main_container">
        <Header />
        <router-view />
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../Header.vue'
import Footer from '../Footer.vue'

export default {
  name: 'layout',
  components: {
    Header,
    Footer
  },
  computed: {
      toggleClass () {
        return this.$store.getters.toggling
      }
  },
}
</script>