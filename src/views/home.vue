<template>
    <slide-show :slides="slides"/>
    <main-btn/>
    <nase-udalnosti/>
    <proc-k-nam />
    <kontakt />
    <nase-obory />
    <footer></footer>


</template>

<script>
import kontakt from '../components/kontakt.vue'
import slideShow from '../components/slideshow.vue'
import mainBtn from '../components/mainButtons.vue'
import naseUdalnosti from '../components/udalosti.vue'
import procKNam from '../components/procKnam.vue'
import naseObory from '../components/obory.vue'

export default {
    components: {
        slideShow,
        mainBtn,
        naseUdalnosti,
        procKNam,
        kontakt,
        naseObory
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
svg{
  height: 267px;
  width: 100%;
  margin-bottom: 0;
}
</style>