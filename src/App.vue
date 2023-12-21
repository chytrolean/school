<template>
  <nav>
    <Navbar />
  </nav>
  <router-view></router-view>

</template> 

<script>
import slideShow from './components/slideshow.vue'
import Navbar from './components/navbar.vue'
import Btn from './components/mainButtons.vue'
import Udalnost from './components/udalosti.vue'
import procKNam from './components/procKnam.vue'
import Obory from './components/obory.vue'

export default {
  name: 'App',
  components: {
    slideShow,
    Navbar,
    Btn,
    Udalnost,
    procKNam,
    Obory
  }, 
  data() {
    return {
      slides: [
        '../src/assets/slide/1.jpg',
        '../src/assets/slide/2.jpg',
        '../src/assets/slide/3.jpg',
      ]
    }
  },
}
</script>
<style scoped>

</style>