<template>
  <nav>
    <Navbar />
  </nav>
    <Foot />
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