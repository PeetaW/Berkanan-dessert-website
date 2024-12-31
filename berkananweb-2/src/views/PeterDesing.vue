<template>
  <nav class="berkanan_content">
    <div class="logo_berkanan">
      <div class="logoTest">
        <img src="../assets/Logo-berkanan.png" alt="Berkanan Logo">
      </div>
      <div class="shopName">
        <h3>Berkanan<br>柏卡納手作烘焙</h3>
      </div>
    </div>
    <div class="category">
      <a>關於我們 About us</a>
      <a>商品列表 Shopping list</a>
      <a>訂購表單 Order form</a>
      <a>聯絡我們 Contact us</a>
    </div>
  </nav>
  <CustomCarousel :images="productImages" :interval="3000"/>
  <section>
    <div class="hello">
      <h3>商品目錄 Catalog</h3>
    </div>
    <div class="itemCard" v-for="list in shoplist" v-bind:key="list.name">
      <div class="topImage" v-bind:style="{ backgroundImage: `url('${require(`@/assets/${list.picture}`)}')` }"></div>
      <div class="bottomInfo">
        <div class="productName">{{list.name}}</div>
        <div class="price">{{list.price}}</div>
      </div>
    </div>
  </section>
  <section>
    <BestSeller msg="暢銷商品 Best Seller"/>
  </section>
  <section>
    <StoreIntro/>
  </section>
  <section>
    <FooterBack/>
  </section>
</template>

<script>
import BestSeller from '../views/BestSeller.vue'
import StoreIntro from '../views/StoreIntro.vue'
import CustomCarousel from '@/views/TestCarousel.vue'
import FooterBack from '@/views/FooterUnder.vue'

export default {
  name: 'PeterDesign',
  components: {
    BestSeller,
    StoreIntro,
    CustomCarousel,
    FooterBack
  },
  data () {
    return {
      shoplist: [
        { name: '費南雪', price: 'NTD$180', picture: 'fernacier.jpeg' },
        { name: '瑪德蓮', price: 'NTD$70', picture: 'madeleines.jpg' },
        { name: '抹茶毛巾捲', price: 'NTD$230', picture: 'LINE_ALBUM_柏卡納_241128_15.jpg' },
        { name: '提拉米蘇', price: 'NTD$230', picture: 'tiramisu.jpg' },
        { name: '德式布丁', price: 'NTD$49', picture: 'texaco-pudding.jpg' },
        { name: '牛奶湯種吐司', price: 'NTD$150', picture: 'toast.jpeg' },
        { name: '爆漿奶油泡芙', price: 'NTD$88', picture: 'cream-puff.jpg' },
        { name: '波士頓派', price: 'NTD$55', picture: 'Boston-pie.jpg' }
      ],
      productImages: [
        'dessert-shop-diagram.jpg',
        'coffee-shop.jpg',
        'Boston-pie.jpg'
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=LXGW+WenKai+TC&display=swap');

* {
  // border: solid 1px black;
  font-family: "LXGW WenKai TC", cursive;
}

nav.berkanan_content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-color: #9e7676;
  height: 11vh;

  div.logo_berkanan{
    display: flex;
    align-items: center;
    height: 100%;
    div.shopName{
      background-color: #9e7676;
      width: 170px;
      height: 100%;
      position: relative;
      h3{
        position: absolute;
        font-weight: 800;
        background-color: #9e7676;
        color: #fff8ea;
        margin: 0;
        line-height: 100%;
        font-size: 1.4rem;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }

  div.logoTest{
    // width: 100px;
    height: 100%;
    img{
      height: 100%;
      background-color: #9e7676;
    }
  }

  div.category{
    display: inline-block;
    width: 50%;
    background-color: #9e7676;
  }

  a {
    display: inline-block;
    vertical-align: middle;
    padding: 0px 10px;
    font-size: 1.4rem;
    width: 150px;
    background-color: #9e7676;
    color: #fff8ea;
    &:hover{
      background-color: #fff8ea;
      color: #9e7676;
    }
  }
}

div.hello{
  h3{
    font-size: 2rem;
  }
}

div.itemCard{
  height: 280px;
  width: 250px;
  box-shadow: 0px 0px 5px 1px rgba(3,3,3, 0.5);
  margin: 15px 30px;
  display: inline-block;
}

div.topImage{
  width: 100%;
  height: 200px;
  background-image: url('../assets/fernacier.jpeg');
  background-position: center;
  background-size: cover;
  border-radius: 0px 0px 15px 15px;
}

div.bottomInfo{
  padding: 20px 0px;
}
</style>
