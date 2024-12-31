<template>
  <div class="carousel">
    <div class="carousel-inner" v-bind:style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div class="carousel-item" v-for="( image, index) in images" v-bind:key="index">
        <img v-bind:src="require('@/assets/' + image)" alt="">
      </div>
    </div>
    <button class="carousel-control prev" @click="prevSlide">Prev</button>
    <button class="carousel-control next" @click="nextSlide">Next</button>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'

export default {
  props: {
    images: {
      type: Array,
      Required: true
    },
    interval: {
      type: Number,
      default: 2000
    }
  },
  setup (props) {
    const currentIndex = ref(0)
    let timer = null

    const nextSlide = () => {
      currentIndex.value = (currentIndex.value + 1) % props.images.length
    }

    const prevSlide = () => {
      currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
    }

    const startAutoPlay = () => {
      stopAutoPlay()
      timer = setInterval(nextSlide, props.interval)
    }

    const stopAutoPlay = () => {
      if (timer) {
        clearInterval(timer)
        timer = null
      }
    }

    onMounted(() => {
      startAutoPlay()
    })

    onBeforeUnmount(() => {
      stopAutoPlay()
    })

    return {
      currentIndex,
      nextSlide,
      prevSlide,
      startAutoPlay,
      stopAutoPlay
    }
  }
}
</script>

<style lang="scss" scoped>
div.carousel{
  position: relative;
  margin: auto;
  height: 90vh;
  width: 80vw;
  overflow: hidden;
}

div.carousel-inner{
  display: flex;
  transition: ease-in-out 0.5s;
}

div.carousel-item{
  height: 100%;
  min-width: 100%;
}

img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

button.carousel-control{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0,0,0, 0.6);
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  display: none;
}

button.carousel-control.prev{
  left: 10px;
}

button.carousel-control.next{
  right: 10px;
}

</style>
