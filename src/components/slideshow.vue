<template>
    <div class="slide">
      <div class="slide-inner">
        <slide-show-item 
        v-for="(slide, index) in slides" 
        :key="`item-${index}`" 
        :slide="slide"
        :current-slide="currSlide"
        :index="index"
        :direction="direction"
        />
        <Controls @prev="prev" @next="next"/>
      </div>
    </div>
</template>

<script>
import slideShowItem from './slideshowitem.vue'
import Controls from './slidecontrols.vue'

export default {
  name: 'slideShow',
  components: {
    slideShowItem,
    Controls
    },
  props: ['slides',],
  data() {
    return {
      currSlide: 0,
      slideInterval: null,
      direction: 'right'
    }
  },
  methods: {
    setCurrSlide(index){
      this.currSlide =  index;
    },
    prev(){
      const index = this.currSlide > 0 ? this.currSlide -1 : this.slides.length -1;
      this.setCurrSlide(index);
      this.direction = 'left';
    },
    next(){
      const index = this.currSlide < this.slides.length -1 ? this.currSlide +1 : 0;
      this.setCurrSlide(index);
      this.direction = 'right';
    }
  },
  mounted() {
    this.slideInterval = setInterval(() => {
       this.next()
    }, 5000);
  },
  beforeUnmount() {
    clearInterval(this.slideInterval);
  },
}
</script>

<style scoped>
  .slide{
    display: flex;
    justify-content: center;
  }
  .slide-inner{
    position: relative;
    width: 100%;
    height: 88vh;
    overflow: hidden;
  }
</style>
