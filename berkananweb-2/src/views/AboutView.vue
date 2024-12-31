<template>
  <div>
    <h1>圖片輪播</h1>
    <CustomCarousel :images="productImages" :interval="3000"/>
  </div>
</template>

<script>
import CustomCarousel from '@/views/TestCarousel.vue'

export default {
  components: {
    CustomCarousel
  },
  data () {
    return {
      productImages: [
        'dessert-shop-diagram.jpg',
        'coffee-shop.jpg',
        'Boston-pie.jpg'
      ]
    }
  }
}
</script>
