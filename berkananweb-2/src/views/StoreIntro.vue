<template>
  <div class="concept">
    <div class="picture"></div>
    <div class="conceptDescript">
      <div class="title">
        <h2>店家理念</h2>
      </div>
      <div class="content">
        <p>這是一間承載溫暖與甜蜜的小小甜點店，創立於一個懷抱夢想的青年心中。從揉捏麵糰到烘焙出爐，每一個步驟都充滿了真誠與用心。我們相信，甜點不僅僅是食物，更是一種能撫慰人心的力量。在繁忙的生活中，為您帶來片刻的放鬆與喜悅，是我們最大的使命。<br><br>這裡的每一款甜點，都像是一封寫滿溫暖的信，傳遞著家的味道和對生活的熱愛。我們選用天然、優質的食材，搭配精湛的技藝，只為讓每一口甜點都帶來幸福的感受。<br><br>我們希望，無論您是慶祝特別的時刻，還是需要一份慰藉，都能在這裡找到屬於您的那份甜蜜。這不僅是一間甜點店，更是一個分享愛與故事的地方，邀請您與我們一起，品嚐生活中的美好滋味。</p>
      </div>
    </div>
  </div>
  <div class="origin">
    <div class="originDescript">
      <div class="originTitle">
        <h2>店家起源</h2>
      </div>
      <div class="originContent">
        <p>這間甜點工作室的故事，始於一位青年對蛋糕與甜點的無限熱忱。店長畢業於高雄餐旅大學，專攻烘焙與甜點製作。在學期間，他深深著迷於甜點藝術，那些精緻的細節、層次分明的口感，讓他感受到烘焙是一種能傳遞情感的美好語言。<br><br>畢業後，他毅然選擇投入這條充滿挑戰的道路，經歷了無數次的試驗與改良，夜以繼日地鑽研技藝，只為將對甜點的熱愛轉化為一口口甜蜜的驚喜。從家中的小廚房開始，一步步成長為今天的甜點工作室，這是夢想的延續，也是對品質的堅持。<br><br>如今，這間工作室承載著他的初心與理想，用心製作每一份甜點，只希望讓每位顧客品嚐到幸福的滋味，並將這份甜蜜的熱忱，傳遞到更多人的心中。</p>
      </div>
    </div>
    <div class="originPicture"></div>
  </div>
</template>

<style scoped lang="scss">

// *{
//   border: solid 1px black;
// }

div.concept, div.origin{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 10px;
}

div.conceptDescript, div.originDescript{
  width: 700px;
  height: 500px;
}

div.picture, div.originPicture{
  width: calc(100% - 720px);
  height: 500px;
}

@media screen and (max-width: 768px) {
  div.concept, div.origin{
    display: block;
  }
  div.picture, div.originPicture{
    width: 100%;
    height: 280px;
  }

  div.conceptDescript, div.originDescript{
    width: 100%;
    display: block;
  }
}

div.picture{
  background-image: url('../assets/coffee-shop.jpg');
  background-size: cover;
  background-position: bottom;
}

div.originPicture{
  background-image: url('../assets/dessert-shop-diagram.jpg');
  background-size: cover;
  background-position: bottom;
}

div.conceptDescript, div.originDescript{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

div.title, div.originTitle{
  h2{
    padding: 0px;
    font-size: 2.2rem;
  }
}

div.content, div.originContent{
  p{
    margin: 0px;
    font-size: 1.1rem;
  }
}

</style>
