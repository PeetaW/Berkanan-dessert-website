<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
  </div>
  <div class="itemCard" v-for="item in sellerlist" v-bind:key=" item.name">
      <div class="topImage" v-bind:style="{ backgroundImage: `url('${require(`@/assets/${item.picture}`)}')`}"></div>
      <div class="bottomInfo">
        <div class="productName">{{ item.name }}</div>
        <div class="productdescription">{{ item.description }}</div>
        <div class="price">{{ item.price }}</div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  data () {
    return {
      sellerlist: [
        { name: '費南雪', price: 'NTD$180', picture: 'fernacier.jpeg', description: '質地濕潤如海綿、經典杏仁香氣的費南雪，是少數歷史有記載的旅人蛋糕，橢圓形的杏仁小蛋糕為其原貌，直到19世紀末，一位糕點師突發奇想，將它作成金磚的樣子賣給股票經紀人，因而廣受歡迎。故費南雪又稱金磚蛋糕。' },
        { name: '瑪德蓮', price: 'NTD$70', picture: 'madeleines.jpg', description: '瑪德蓮（ Madeleine ）是經典的法式點心，多為小巧可愛的貝殼造型，吃起來鬆軟卻口感綿密，帶有清爽的奶油香氣，讓你每一口都是滿滿的法式風情。' },
        { name: '波士頓派', price: 'NTD$55', picture: 'Boston-pie.jpg', description: '外表Q彈咬下蓬鬆軟綿的香草蛋糕體,搭配甜度適中口感清爽的鮮奶油，表層撒上有如雪花般薄薄的防潮糖霜,咬下一口清爽不油膩，下午茶搭配紅茶最佳選擇。' },
        { name: '提拉米蘇', price: 'NTD$230', picture: 'tiramisu.jpg', description: '提拉米蘇 國外進口新鮮乳酪製成慕斯，風味可口清爽，底層採用歐洲進口小麥胚芽餅製作，香味誘人，並以進口Barry Callebaut高脂可可粉鋪灑而成，若酌以一杯濃郁咖啡，閒散於午后將是絕配。(內含微量咖啡酒)(葷食)。' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
div.hello{
  h3{
    font-size: 2rem;
  }
}

div.itemCard{
  height: 500px;
  width: 290px;
  box-shadow: 0px 0px 5px 1px rgba(3,3,3, 0.5);
  margin: 15px 30px;
  display: inline-block;
  vertical-align: top;
}

div.topImage{
  width: 100%;
  height: 200px;
  background-image: url('../assets/LINE_ALBUM_柏卡納_241128_12.jpg');
  background-position: center;
  background-size: cover;
  border-radius: 0px 0px 15px 15px;
}

div.bottomInfo{
  padding: 40px 0px;
  div.productName{
    font-size: 1.4rem;
    font-weight: bold;
    color: rgb(71, 72, 72, 1);
  }
  div.productdescription{
    padding: 10px 5px;
    font-size: 1.1rem;
    font-weight: normal;
    color: rgb(71, 72, 72, 1);
  }
  div.price{
    font-size: 0.9rem;
    font-weight: normal;
    color: rgb(130, 133, 133, 1);
  }
}
</style>
