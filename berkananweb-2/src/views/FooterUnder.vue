<template>
  <div class="footer-background">
    <div class="fter_bg fter_bg_left">
      <div class="left-title">關於我們</div>
      <div class="left-anchor">
        <p>
          <a href="">品牌故事</a>
        </p>
      </div>
    </div>
    <div class="fter_bg fter_bg_right">
      <div class="right-title">聯絡我們</div>
      <div class="right-content">
        <p>電話:09XXXXXXXXX</p>
        <p>營業時間: 11:00-21:00 每周三至六</p>
        <p>地址: 高雄市前鎮區崗山中街539號1樓</p>
      </div>
    </div>
  </div>
  <div class="follow-us">
    <hr>
    <h3>Follow us</h3>
    <div class="icon">
      <div class="facebook">
        <font-awesome-icon :icon="['fab', 'facebook']" />
      </div>
      <div class="instagram">
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </div>
      <div class="LINE">
        <font-awesome-icon :icon="['fab', 'line']" />
      </div>
      <div class="telephone">
        <font-awesome-icon :icon="['fas', 'phone']" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/js/all.min.js');

div.footer-background{
  // height: 70vh;
  background-color: #9e7676;
  display: flex;
  align-items: center;
  justify-content: center;
}

div.fter_bg{
  flex: 2 1 auto;
  height: 20vh;
  margin: 25px 0px;
}

div.left-title, div.right-title{
  font-size: 2rem;
}

hr{
  border-color: black;
  display: flex;
}

div.follow-us{
  display: inline-block;
  width: 100%;
  background-color: #9e7676;
  h3{
    font-size: 1.8rem;
  }
}

div.icon{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 3rem;
}

p{
  font-size: 1rem;
}
</style>
