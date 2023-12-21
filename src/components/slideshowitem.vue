<template>
  <transition :name="eff"> 
    <div class="slide-item" v-show="currentSlide === index" >
        <img :src="slide">
    </div>
  </transition> 
</template>

<script>
export default {
    props: ['slide','currentSlide', 'index', 'direction'],
    computed: {
        eff(){
            return this.direction === 'right' ? 'slide-out' : 'slide-in'
        }
    }
}
</script>

<style scoped>
    img{
        width: 100%;
        height: 100%;
    }
    .slide-item{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }

    .slide-in-enter-active,
    .slide-in-leave-active,
    .slide-out-enter-active,
    .slide-out-leave-active{
        transition: all 2s ease-in-out;
    }
    .slide-in-enter-from{
        transform: translateX(-100%);
    }
    .slide-in-leave-to{
        transform: translateX(100%);
    }
    .slide-out-enter-from{
        transform: translateX(100%);
    }
    .slide-out-leave-to{
        transform: translateX(-100%);
    }
</style>