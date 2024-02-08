<template>
  <nav>
    <Navbar v-if="!$route.meta.hideNavbar"/>
  </nav>
    <Foot v-if="!$route.meta.hideFoot"/>
  <router-view></router-view>
</template> 

<script>
import Navbar from './components/navbar.vue'
import Foot from './components/foot.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Foot
  }, 
}
</script>
<style scoped>

</style>