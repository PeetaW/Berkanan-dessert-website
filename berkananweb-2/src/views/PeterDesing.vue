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
    <div class="hamburger" @click="toggleMenu" v-bind:class="{'is-active': isActive}">
      <a role="button" class="hamburgerButton">
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>
    <div class="category">
      <a>關於我們 About us</a>
      <a>商品列表 Shopping list</a>
      <a>訂購表單 Order form</a>
      <a>聯絡我們 Contact us</a>
    </div>
    <div class="hamburgerMenu" @click="toggleMenu" v-bind:class="{'is-active': isActive}">
      <div class="menuFrame">
        <div class="navLink">
          <ul class="linkList">
            <li><a>關於我們 About us</a></li>
            <hr>
            <li><a>商品列表 Shopping list</a></li>
            <hr>
            <li><a>訂購表單 Order form</a></li>
            <hr>
            <li><a>聯絡我們 Contact us</a></li>
          </ul>
        </div>
      </div>
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
      ],
      isActive: false
    }
  },
  methods: {
    toggleMenu () {
      this.isActive = !this.isActive
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  overflow: hidden;

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

  div.hamburger{
    display: none;
    a{
      display: inline-block;
      padding: 2px 10px;
      cursor: pointer;
      &:hover{
      background-color: #fff8ea;
      span{
        background-color: #9e7676;
      }
      }
      span{
        // border: solid 1px black;
        display: block;
        height: 4px;
        width: 35px;
        margin: 5px 0;
        background-color: #fff8ea;
        transition: ease 0.3s;
      }
    }
    &.is-active{
        a{
          span:nth-child(1){
            transform: rotate(45deg) translate(5px, 7px);
          }
          span:nth-child(2){
            opacity: 0;
          }
          span:nth-child(3){
            transform: rotate(-45deg) translate(5px, -7px);
          }
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
    // display: none;
    width: 50%;
    background-color: #9e7676;
    a{
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
}

@media screen and (max-width: 576px) {
  nav.berkanan_content{
  div.category{
      display: none;
  }
  div.hamburger{
    display: block;
  }
  }
}

div.hamburgerMenu{
  height: 0;
  overflow: hidden;
  transition: height 1s ease-in-out;
  position: absolute;
  top: 100px;
  left: 0;
  background-color: rgba(255, 255, 255, 0.8);
  width: 100%;
  z-index: 2;
  &.is-active{
    height: calc(100vh - 100px);
  }

  div.navLink{
    display: flex;
    ul.linkList{
      list-style-type: none;
      padding: 0;
      text-align: left;
      font-size: 2rem;
      li{
        margin: 15px 0px;
      }
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
